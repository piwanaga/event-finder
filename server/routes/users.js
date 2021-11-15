const express = require('express');
const { createToken } = require('../helpers/tokens');
const cors = require('cors');

const User = require('../models/User');

const router = new express.Router();

// const corsOptions = {
//     origin: 'https://event-finder.surge.sh',
//     optionsSuccessStatus: 200
// }


router.post("/login", async (req, res, next) => {
    try { 
        const { username, password } = req.body;
        // const user = await User.authenticate(username, password);
        // const token = createToken(user);
        res.set('Access-Control-Allow-Origin', 'https://event-finder.surge.sh')
        console.log(res)
        // return res.json({ user, token });
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

router.get('/:username', async (req, res, next) => {
    try {
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

router.post('/:username/artists', async (req, res, next) => {
    try {
        const artist = await User.addArtist(req.body);
        return res.json({ artist });
    } catch (e) {
        return next(e)
    };
});

router.delete('/:username/artists', async (req, res, next) => {
    try {
        const id = await User.removeArtist(req.body);
        return res.json(id);
    } catch (e) {
        return next(e)
    };
});

module.exports = router;