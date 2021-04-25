const express = require("express");
const router = express.Router();
var cvJson = require("../../myJsonData");

// 1) GET
router.get("/", (req, resp) => {
  resp.send(cvJson);
});
// 2) POST a new session
router.post("/", (req, resp) => {
  try {
    if (req.body != null) {
      var newSession = req.body;
      cvJson = { cvJson, ...newSession };
    }
  } catch (err) {
    console.log(err);
  }
  resp.send(cvJson);
});
// 3) PUT
router.put("/:session", (req, resp) => {
  // Find session
  const sessiontoUpd = req.params.session;
  var result = cvJson[sessiontoUpd];
  var newSession = req.body;
  // Iterate cvJson
  Object.keys(cvJson).forEach((key) => {
    if (cvJson[key] === result) {
      // Delete session
      delete cvJson[key];
      // Insert session modified
      cvJson[key] = newSession;
    }
  });
  resp.send(cvJson);
});
// 4) DELETE
router.delete("/:session", (req, resp) => {
  // Find session
  const sessiontoUpd = req.params.session;
  var result = cvJson[sessiontoUpd];
  // Iterate cvJson
  Object.keys(cvJson).forEach((key) => {
    if (cvJson[key] === result) {
      // Delete session
      delete cvJson[key];
    }
  });
  resp.send(cvJson);
});

module.exports = router;
