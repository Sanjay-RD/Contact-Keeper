const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Contact = require("../models/Contact");

// @desc      Get all user contact
// @route     GET api/v1/contacts
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    // console.log(req.id);
    const contacts = await Contact.find({ user: req.id });
    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: true,
      msg: "Server Error",
    });
  }
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
