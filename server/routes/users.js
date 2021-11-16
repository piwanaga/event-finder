const express = require('express');
const { createToken } = require('../helpers/tokens');
const cors = require('cors');
const User = require('../models/User');

const router = new express.Router();
const headers = {
    'Access-Control-Request-Headers': 'application/json',
    'Access-Control-Allow-Origin': 'https://event-finder.surge.sh',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
}

router.post("/login", cors(), async (req, res, next) => {
    try { 
        res.set(headers)
        const { username, password } = req.body;
        const user = await User.authenticate(username, password);
        const token = createToken(user);
        return res.json({ user, token });
    } catch (e) {
      return next(e);
    };
  });

router.post('/register', async (req, res, next) => {
    try {
        // create token with username
        const user = await User.create(req.body)
        const token = createToken(user);
        return res.json({ user, token })
    } catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError('Username already taken', 400))
        }
        return next(e)
    };
});

router.get('/:username', cors(), async (req, res, next) => {
    try {
        res.set(headers)
        const user = await User.fetch(req.params.username);
        return res.json({ user });
    } catch (e) {
        return next(e)
    };
});

router.patch('/:username', async (req, res, next) => {
    try {
        const user = await User.update(req.params.username, req.body);
        return res.json({ user });
    } catch (e) {
        return next(e)
    };
});

router.post('/:username/artists', cors(), async (req, res, next) => {
    try {
        res.set(headers)
        const artist = await User.addArtist(req.body);
        return res.json({ artist });
    } catch (e) {
        return next(e)
    };
});

router.delete('/:username/artists', cors(), async (req, res, next) => {
    try {
        res.set(headers)
        const id = await User.removeArtist(req.body);
        return res.json(id);
    } catch (e) {
        return next(e)
    };
});

module.exports = router;