const express = require('express');
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth')
const { createToken } = require('../helpers/tokens');
const User = require('./models/User');
// const requestIp = require('request-ip');

const userRoutes = require("./routes/users");

const app = express();

// app.use(cors())
app.use(express.json());
// app.use(authenticateJWT);
// app.use(requestIp.mw());

// app.use(function(req, res) {
//   const ip = req.clientIp;
//   console.log(ip)
//   res.end(ip);
// });

// app.use("/users", userRoutes);
app.options('/users/login', cors())
app.post("/users/login", cors(), async (req, res, next) => {
  try { 
      res.set({
          'Access-Control-Request-Headers': 'application/json',
          'Access-Control-Allow-Origin': 'https://event-finder.surge.sh',
          // 'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
      })
      // const { username, password } = req.body;
      // const user = await User.authenticate(username, password);
      // const token = createToken(user);
      // return res.json({ user, token });
      return res.json({ username, password });
  } catch (e) {
    return next(e);
  };
});

app.use(function(err, req, res, next) {
    const status = err.status || 500;
  
    return res.status(status).json({
      error: {
        status: err.status,
        message: err.message
      }
    });
  });

module.exports = app;