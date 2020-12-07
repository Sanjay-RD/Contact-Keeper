const express = require("express");
const colors = require("colors");
const app = express();

// get router files
const auth = require("./routes/auth");
const user = require("./routes/user");
const contact = require("./routes/contact");

// moute router
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/contacts", contact);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`.yellow);
});
