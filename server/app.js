const express = require('express');
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth')
// const requestIp = require('request-ip');
const User = require('./models/User');

const userRoutes = require("./routes/users");

const app = express();

app.use(cors())
app.use(express.json());
app.use(authenticateJWT);
// app.use(requestIp.mw());

// app.use(function(req, res) {
//   const ip = req.clientIp;
//   console.log(ip)
//   res.end(ip);
// });

// app.options('*', cors())

// app.use("/users", userRoutes);

app.post("/users/login", async (req, res, next) => {
  try { 
      const { username, password } = req.body;
      const user = await User.authenticate(username, password);
      // const token = createToken(user);
      // res.set('Access-Control-Allow-Origin', 'https://event-finder.surge.sh')
      // console.log(res)
      return res.json({user})
      // return res.json({ user, token });
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