const express = require("express");
const router = express.Router();

// @desc      Get all logged in user
// @route     GET api/v1/auth
// @access    Private
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Get All login user",
  });
});

// @desc      Auth user and get token
// @route     GET api/v1/auth
// @access    public
router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "log in user",
  });
});

module.exports = router;
