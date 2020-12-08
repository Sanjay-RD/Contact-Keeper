const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.status(200).json({
      success: true,
    });
  }
);

module.exports = router;
