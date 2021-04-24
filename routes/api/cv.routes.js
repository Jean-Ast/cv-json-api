const express = require("express");
const router = express.Router();
var cvJson = require("../../myJsonData")

// 1) GET
router.get("/", (req, resp) => {
    resp.json(cvJson);
})
// 2) POST
// 3) PUT
// 4) DELETE

module.exports = router;