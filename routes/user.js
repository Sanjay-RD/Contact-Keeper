const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

// @desc      Register user
// @route     POST api/v1/user
// @access    public
router.post(
  "/",
  [
    check("name", "Please Enter Name").not().isEmpty(),
    check("email", "Please Enter valid Email").isEmail(),
    check(
      "password",
      "Please Enter a Password with 6 or more character"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          success: false,
          msg: "User Already Exit",
        });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
      });

      res.status(200).json({
        success: true,
        token,
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        success: false,
        msg: "Server Error",
      });
    }
  }
);

module.exports = router;
