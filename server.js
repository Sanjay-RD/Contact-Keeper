const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "basic server setup",
  });
});

app.listen(5000, () => {
  console.log(`Server running on port ${PORT}`);
});
