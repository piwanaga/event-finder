const express = require('express');
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth')
// const requestIp = require('request-ip');

const userRoutes = require("./routes/users");

const app = express();

// app.use(cors())
app.use(express.json());
app.use(authenticateJWT);
// app.use(requestIp.mw());

// app.use(function(req, res) {
//   const ip = req.clientIp;
//   console.log(ip)
//   res.end(ip);
// });
const whitelist = ["https://event-finder.surge.sh"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use("/users", userRoutes);

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