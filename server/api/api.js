const express = require("express");
const router = express.Router();

router.get("/message", (req, res) => {
    res.json({ message: "Hello from API!" });
  });
  
  router.get("/users", (req, res) => {
    res.json([
      { id: 1, name: "John Doeacscs" },
      { id: 2, name: "Jane Doe" },
    ]);
  });
  
module.exports = router;