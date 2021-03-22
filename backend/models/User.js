const db = require("../db");
const bcrypt = require('bcrypt')
const { BCRYPT_WORK_FACTOR } = require("../config");
const { BadRequestError, UnauthorizedError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sqlForPartialUpdate');

class User {
    // Authenticate user and return user details
    static async authenticate(username, password) {
        const result = await db.query(
              `SELECT username,
                      password,
                      first_name AS "firstName",
                      last_name AS "lastName",
                      email,
                      photo_url AS "photoUrl"
               FROM users
               WHERE username = $1`,
            [username],
        );
    
        const user = result.rows[0];
    
        if (user) {
          // compare hashed password to a new hash from password
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid === true) {
            delete user.password;
            return user;
          };
        };
        throw new UnauthorizedError("Invalid username/password");
    };
    
    // Create new user
    static async create({ username, password, firstName, lastName, email, photoUrl }) {
        const duplicateCheck = await db.query(
            `SELECT username
                FROM users
                WHERE username = $1`,
            [username],
        );

        if (duplicateCheck.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${username}`);
        };

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const result = await db.query(
            `INSERT INTO users
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING username, first_name AS "firstName", last_name AS "lastName", email, photo_url AS "photoUrl"`,
            [username, hashedPassword, firstName, lastName, email, photoUrl]
        );
        return result.rows[0]
    };

    // Get user details, including friends and artists following
    static async fetch(username) {
        const userResult = await db.query(
            `SELECT username,
                    first_name AS "firstName",
                    last_name AS "lastName",
                    email,
                    photo_url AS "photoUrl"
             FROM users
             WHERE username = $1`,
          [username]
        );
        const user = userResult.rows[0];

        const friendsResult = await db.query(
            `SELECT f.username2 as "username",
                    u.photo_url AS "photoUrl"
             FROM users u 
             JOIN friends f ON f.username2 = u.username
             WHERE f.username1 = $1`,
             [username]
        );
        const friends = friendsResult.rows

        const artistsResult = await db.query(
            `SELECT id,
                    name,
                    photo_url AS "photoUrl"
             FROM artists_following
             WHERE username = $1`,
             [username]
        );
        const artists = artistsResult.rows

        return {...user, friends: friends, artists: artists}
    };

    // Update user details: firstName, lastName, email, photoUrl
    static async update(username, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
              firstName: "first_name",
              lastName: "last_name",
              email: "email",
              photoUrl: "photo_url"
            });
        const usernameVarIdx = "$" + (values.length + 1);
    
        const querySql = `UPDATE users 
                          SET ${setCols} 
                          WHERE username = ${usernameVarIdx} 
                          RETURNING username,
                                    first_name AS "firstName",
                                    last_name AS "lastName",
                                    email,
                                    photo_url AS "photoUrl"`;
        const result = await db.query(querySql, [...values, username]);
        const user = result.rows[0];
        return user
    };

    // Add new artist to following
    static async addArtist({id, name, photoUrl, username}) {
        const result = await db.query(
            `INSERT INTO artists_following
             VALUES ($1, $2, $3, $4)
             RETURNING id, name, photo_url AS "photoUrl", username`,
             [id, name, photoUrl, username]
        );

        return result.rows[0];
    };

    // Remove artist from following
    static async removeArtist({ id, username }) {
        const result = await db.query(
            `DELETE FROM artists_following
             WHERE id=$1 AND username=$2
             RETURNING id`,
             [id, username]
        );
        return result.rows[0];
    };

    // Search users
    static async searchUsers(username) {
        const result = await db.query(
            `SELECT username, 
                    photo_url AS "photoUrl"
             FROM users
             WHERE UPPER(username)
             LIKE UPPER($1)`,
             [`%${username}%`]
        );
        
        const users = result.rows
        return users
    };

    // Add friend
    static async addFriend({ username1, username2 }) {
        await db.query(
            `INSERT INTO friends (username1, username2)
             VALUES ($1, $2),
                    ($2, $1)`,
             [username1, username2]
        );

        const result = await db.query(
            `SELECT username,
                    photo_url AS "photoUrl"
             FROM users
             WHERE username = $1`,
             [username2]
        );

        return result.rows[0]
    };

    // Remove friend
    static async removeFriend({ username1, username2 }) {
        const result = await db.query(
            `DELETE FROM friends
             WHERE id IN 
                (SELECT id
                    FROM friends
                    WHERE (username1 = $1 AND username2 = $2) OR
                          (username1 = $2 AND username2 = $1))
             RETURNING id`,
             [username1, username2]
        );

        return {username: username2}
    }
};

module.exports = User;