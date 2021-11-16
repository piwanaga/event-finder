const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config");

function createToken(user) {  
    let payload = {
      username: user.username
    };
    console.log('create token:', payload, SECRET_KEY)
    return jwt.sign(payload, SECRET_KEY);
};
  
module.exports = { createToken };