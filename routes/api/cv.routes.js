const express = require("express");
const router = express.Router();
var cvJson = require("../../myJsonData");

// User Info to login
const userInfo = {
  username: "jean",
  password: "pass",
};

// 1) GET
router.get("/", (req, resp) => {
  resp.send(cvJson);
});
// 1.1) GET Ruta navegable => cv.session
router.get("/:session", (req, resp) => {
  // console.log(req.params);
  // resp.send(req.params);
  let mySession = req.params.session;
  resp.send(cvJson[mySession]);
});

// 1.2 GET Ruta navegable => cv.session.subSession
router.get("/:session/subsession/:mysubsession", (req, resp) => {
  // resp.send(req.params)
  // Retrive params
  let _mysession = req.params.session;
  let _mysubsession = req.params.mysubsession;
  // Create a new cvJson to access a subsession
  let newcvJson = cvJson[_mysession];
  let completeSubsession = newcvJson[_mysubsession];
  // Send the new cvJson subsession
  resp.send(completeSubsession);
});

// 2) POST a new session
router.post("/", (req, resp) => {
  if (req.headers.authorization === undefined) {
    resp
      .status(401)
      .send("Please provide basic auth in headers with base64 encoding");
  } else {
    // Encode request value headers
    var encodedReq = req.headers.authorization.split(" ")[1];
    // Decode request value headers
    var decodeReq = new Buffer(encodedReq, "base64").toString();
    var userName = decodeReq.split(":")[0];
    var password = decodeReq.split(":")[1];

    // Valide credentials with correct userName and correct password
    if (
      userInfo.username.toLowerCase() === userName.toLowerCase() &&
      userInfo.password === password
    ) {
      try {
        if (req.body != null) {
          var newSession = req.body;
          cvJson = { cvJson, ...newSession };
        }
      } catch (err) {
        console.log(err);
      }
      resp.send(cvJson);
    } else {
      resp
        .status(401)
        .send(
          "Invalid data provided. Please check your username and password, then try again"
        );
    }
  }
});
// 3) PUT
router.put("/:session", (req, resp) => {
  if (req.headers.authorization === undefined) {
    resp
      .status(401)
      .send("Please provide basic auth in headers with base64 encoding");
  } else {
    // Encode request value headers
    var encodedReq = req.headers.authorization.split(" ")[1];
    // Decode request value headers
    var decodeReq = new Buffer(encodedReq, "base64").toString();
    var userName = decodeReq.split(":")[0];
    var password = decodeReq.split(":")[1];

    // Valide credentials with correct userName and correct password
    if (
      userInfo.username.toLowerCase() === userName.toLowerCase() &&
      userInfo.password === password
    ) {
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
    }
  }
});
// 4) DELETE
router.delete("/:session", (req, resp) => {
  if (req.headers.authorization === undefined) {
    resp
      .status(401)
      .send("Please provide basic auth in headers with base64 encoding");
  } else {
    // Encode request value headers
    var encodedReq = req.headers.authorization.split(" ")[1];
    // Decode request value headers
    var decodeReq = new Buffer(encodedReq, "base64").toString();
    var userName = decodeReq.split(":")[0];
    var password = decodeReq.split(":")[1];

    // Valide credentials with correct userName and correct password
    if (
      userInfo.username.toLowerCase() === userName.toLowerCase() &&
      userInfo.password === password
    ) {
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
    }
  }
});

module.exports = router;
