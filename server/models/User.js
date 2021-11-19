const db = require("../db");
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require("../config");
const { BadRequestError, UnauthorizedError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sqlForPartialUpdate');

class User {
    // Authenticate user and return user details
    static async authenticate(email, password) {
        const result = await db.query(
              `SELECT email,
                      password,
                      first_name AS "firstName",
                      last_name AS "lastName"
               FROM users
               WHERE email = $1`,
            [email],
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
        throw new UnauthorizedError("Invalid email/password");
    };
    
    // Create new user
    static async create({ email, password, firstName, lastName }) {
        const duplicateCheck = await db.query(
            `SELECT email
                FROM users
                WHERE email = $1`,
            [email],
        );

        if (duplicateCheck.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${email}`);
        };

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        const result = await db.query(
            `INSERT INTO users
            VALUES ($1, $2, $3, $4)
            RETURNING email, first_name AS "firstName", last_name AS "lastName"`,
            [email, hashedPassword, firstName, lastName]
        );
        return result.rows[0]
    };

    // Get user details, including friends and artists following
    static async fetch(username) {
        const userResult = await db.query(
            `SELECT email,
                    first_name AS "firstName",
                    last_name AS "lastName"
             FROM users
             WHERE email = $1`,
          [username]
        );
        const user = userResult.rows[0];

        const artistsResult = await db.query(
            `SELECT id,
                    name,
                    photo_url AS "photoUrl"
             FROM artists_following
             WHERE email = $1`,
             [username]
        );
        const artists = artistsResult.rows

        return {...user, artists: artists}
    };

    // Update user details: firstName, lastName, email, photoUrl
    static async update(username, data) {
        const { setCols, values } = sqlForPartialUpdate(
            data,
            {
              firstName: "first_name",
              lastName: "last_name",
              email: "email"
            });
        const usernameVarIdx = "$" + (values.length + 1);
    
        const querySql = `UPDATE users 
                          SET ${setCols} 
                          WHERE username = ${usernameVarIdx} 
                          RETURNING username,
                                    first_name AS "firstName",
                                    last_name AS "lastName",
                                    email`;
        const result = await db.query(querySql, [...values, username]);
        const user = result.rows[0];
        return user
    };

    // Add new artist to following
    static async addArtist({id, name, photoUrl, username}) {
        const result = await db.query(
            `INSERT INTO artists_following
             VALUES ($1, $2, $3, $4)
             RETURNING id, name, photo_url AS "photoUrl", email`,
             [id, name, photoUrl, username]
        );

        return result.rows[0];
    };

    // Remove artist from following
    static async removeArtist({ id, username }) {
        const result = await db.query(
            `DELETE FROM artists_following
             WHERE id=$1 AND email=$2
             RETURNING id`,
             [id, username]
        );
        return result.rows[0];
    };
};

module.exports = User;