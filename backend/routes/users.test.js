process.env.NODE_ENV = "test";

const request = require('supertest');

const app = require('../app.js');
const db = require('../db.js');
const User = require('../models/User.js');
const { createToken } = require('../helpers/tokens');

/** Create users for testing */
beforeAll(async () => {
    await db.query('DELETE FROM users');
    await db.query('DELETE FROM artists_following');
    await db.query('DELETE FROM friends');

    await User.create({
        username: 'user1', 
        password: 'password1', 
        firstName: 'test',
        lastName: 'user', 
        email: 'user1@email.com', 
        photoUrl: 'http://www.user1img.com'
    });

    await User.create({
        username: 'user2', 
        password: 'password2', 
        firstName: 'second',
        lastName: 'user', 
        email: 'user2@email.com', 
        photoUrl: 'http://www.user2img.com'
    });
});

/** Create token to pass to auth middleware to authenticate request */
const token1 = createToken({username: 'user1'});

afterAll(async () => {
    await db.end();
});

/** Logging in with valid credentials should return user object and token */
describe('POST /login', () => {
    test('can login', async () => {
        const resp = await request(app)
            .post('/users/login')
            .send({
                username: 'user1',
                password: 'password1'
            });
        
        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toEqual({
            user: {
                username: 'user1',
                firstName: 'test',
                lastName: 'user',
                email: 'user1@email.com',
                photoUrl: 'http://www.user1img.com'
            },
            token: expect.any(String)
        });
    });
});

/** Should be able to update user's firstName, lastName, email, and photoURL and should get the updated user object returned */
describe('PATCH /:username', () => {
    test('can update user', async () => {
        const resp = await request(app)
        .patch('/users/user1')
        .send({
            firstName: 'TEST',
            lastName: 'USER',
            email: 'updated@email.com',
            photoUrl: 'http://www.updatedimg.com'
        });

        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toEqual({
            user: {
                username: 'user1',
                firstName: 'TEST',
                lastName: 'USER',
                email: 'updated@email.com',
                photoUrl: 'http://www.updatedimg.com'
            }
        });
    });
});

/** Searching by username should return an array of mathing user objects */
describe('GET /search/:username', () => {
    test('can search existing users by username', async () => {
        const resp = await request(app)
        .get('/users/search/user');
        
        /** Because we only have two users in our test db, searching for 'user' should return two results */
        expect(resp.statusCode).toEqual(200);
        expect(resp.body.users.length).toEqual(2);
    });
});

/** Should be able to follow artist and get artist object returned */
describe('POST /:username/artists', () => {
    test('can add artist', async () => {
        const resp = await request(app)
        .post('/users/user1/artists')
        .send({
            id: 1,
            name: 'test artist',
            photoUrl: 'http://www.aritstimg.com',
            username: 'user1'
        });

        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toEqual({
            artist: {
                id: '1',
                name: 'test artist',
                photoUrl: 'http://www.aritstimg.com',
                username: 'user1'
            }
        });

        const user = await User.fetch('user1');
        expect(user.artists.length).toEqual(1);
    });
});

/** Should be able to unfollow an artist */
describe('DELETE /:username/artists', () => {
    test('can remove an artist', async () => {
        const resp = await request(app)
        .delete('/users/user1/artists')
        .send({
            id: 1,
            username: 'user1'
        });

        expect(resp.statusCode).toEqual(200);
        
        const user = await User.fetch('user1');
        expect(user.artists.length).toEqual(0);
    });
});

/** Should be able to add a friend */
describe('POST /:username/friends', () => {
    test('can add a friend', async () => {
        const resp = await request(app)
        .post('/users/user1/friends')
        .send({
            username1: 'user1',
            username2: 'user2'
        });

        expect(resp.statusCode).toEqual(200);
        expect(resp.body).toEqual({
            newFriend: {
                username: 'user2',
                photoUrl: 'http://www.user2img.com'
            }
        });
        
        const user = await User.fetch('user1');
        expect(user.friends.length).toEqual(1);
    });
});

/** Should be able to remove a friend */
describe('DELETE /:username/friends', () => {
    test('can remove a friend', async () => {
        const resp = await request(app)
        .delete('/users/user1/friends')
        .send({
            username1: 'user1',
            username2: 'user2'
        });

        expect(resp.statusCode).toEqual(200);
        
        const user = await User.fetch('user1');
        expect(user.friends.length).toEqual(0);
    });
});

