const express = require("express");
const router = express.Router();

// @desc      Get all user contact
// @route     GET api/v1/contacts
// @access    Private
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Get All user contacts",
  });
});

// @desc      create contact
// @route     POST api/v1/contacts
// @access    Private
router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "create contact",
  });
});

// @desc      update contact
// @route     PUT api/v1/contacts/:id
// @access    Private
router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `update contact of id ${req.params.id}`,
  });
});

// @desc      Delete contact
// @route     DELETE api/v1/contacts/:id
// @access    Private
router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `Delete contact of id ${req.params.id}`,
  });
});

module.exports = router;
