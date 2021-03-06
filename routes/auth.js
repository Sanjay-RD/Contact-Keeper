const express = require("express");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();

// @desc      Get all logged in user
// @route     GET api/v1/auth
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.id).select("-password");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: true,
      msg: "Server Error",
    });
  }
});

// @desc      Auth user and get token // Login user and get token
// @route     GET api/v1/auth
// @access    public
router.post(
  "/",
  [
    check("email", "Please Enter a Valid Email").isEmail(),
    check("password", "Please Enter your Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          success: false,
          msg: "Invalid Crenditial",
        });
      }

      // let isMatch = user.matchPassword(user.password);
      let isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          msg: "Invalid Crenditial",
        });
      }

      const token = user.getSignedJwtToken();

      res.status(200).json({
        success: true,
        token,
      });
    } catch (error) {
      console.error(error.message.red.inverse);
      res.status(500).json({
        success: false,
        msg: "Server Error",
      });
    }
  }
);

module.exports = router;
