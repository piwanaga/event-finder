process.env.NODE_ENV = "test";

const db = require('../db.js');
const User = require('./User.js');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require("../config");
const { 
    UnauthorizedError,
    BadRequestError
} = require('../expressError.js');

/** Create user for testing */
beforeAll(async () => {
    await db.query('DELETE FROM users');

    await db.query(`
        INSERT INTO users(username,
                          password,
                          first_name,
                          last_name,
                          email,
                          photo_url)
        VALUES ('user1', $1, 'test', 'user', 'user1@email.com', 'http://www.user1img.com')
        RETURNING username`,
        [await bcrypt.hash("password1", BCRYPT_WORK_FACTOR)]);
});

afterAll(async () => {
    await db.end();
});

describe('authenticate', () => {
    /** Valid username and password should return user object */
    test('authentication works', async () => {
        const user = await User.authenticate('user1', 'password1');
        expect(user).toEqual({
            username: 'user1',
            firstName: 'test',
            lastName: 'user',
            email: 'user1@email.com',
            photoUrl: 'http://www.user1img.com'
        });
    });

    /** Invalid password should throw UnauthorizedError */
    test('fails if password incorrect', async () => {
        try {
            await User.authenticate("user1", "incorrect");
        } catch (err) {
            expect(err instanceof UnauthorizedError).toBeTruthy();
        };
    });
});

describe('register', () => {
    /** Valid credentials should create new user and return user object */
    test('can create new user', async () => {
        const user = await User.create({
            username: 'user2', 
            password: 'password2', 
            firstName: 'new',
            lastName: 'user', 
            email: 'user2@email.com', 
            photoUrl: 'http://www.user2img.com'
        });
        expect(user).toEqual({
            username: 'user2',
            firstName: 'new',
            lastName: 'user',
            email: 'user2@email.com',
            photoUrl: 'http://www.user2img.com'
        });
    });

    /** Should throw BadRequestError if username already exists  */
    test('fails if user already exists', async () => {
        try {
            await User.create({
                username: 'user1', 
                password: 'password1', 
                firstName: 'test',
                lastName: 'user', 
                email: 'user1@email.com', 
                photoUrl: 'http://www.user1img.com'
            });
        } catch (err) {
            expect(err instanceof BadRequestError).toBeTruthy();
        };
    });
});

describe('fetch', () => {
    /** Fetching user by username should return regular user object plus friends and artists arrays */
    test('gets user', async () => {
        const user = await User.fetch('user1');
        expect(user).toEqual({
            username: 'user1', 
            firstName: 'test',
            lastName: 'user', 
            email: 'user1@email.com', 
            photoUrl: 'http://www.user1img.com',
            friends: [],
            artists: []
        });
    });
});