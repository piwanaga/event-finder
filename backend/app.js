const express = require('express');
const cors = require('cors');
const { authenticateJWT } = require('./middleware/auth')

const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticateJWT);

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