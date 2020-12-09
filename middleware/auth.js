const jwt = require("jsonwebtoken");
// const User = require("../models/User");

module.exports = function (req, res, next) {
  // get token from header
  const token = req.header("auth-token");
  // check for token
  if (!token) {
    return res.status(401).json({
      success: false,
      msg: "Not Authorized to access this route",
    });
  }

  try {
    //   verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decode.id;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({
      success: false,
      msg: "Token is not valid",
    });
  }
};
