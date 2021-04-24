const express = require("express");
const app = express();
const port = process.env.port || 5050

app.use(express.json());
app.use(express.urlencoded({extended: false})); // To work with Json format

// CV API Routes
app.use("/api/cv", require("./routes/api/cv.routes"))

// Listening
app.listen(port, () => console.log(`Listening on port ${port}`));