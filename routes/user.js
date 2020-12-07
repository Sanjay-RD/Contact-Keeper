const express = require("express");
const router = express.Router();

// @desc      Register user
// @route     POST api/v1/user
// @access    public
router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "register user",
  });
});

module.exports = router;
