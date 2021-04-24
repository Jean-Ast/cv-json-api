const express = require("express");
const router = express.Router();

// 1) GET
router.get("/", (req, resp) => {
    resp.send("Welcome to my app");
})
// 2) POST
// 3) PUT
// 4) DELETE

module.exports = router;