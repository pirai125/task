const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cors_options = {
  origin: "http://localhost:5173",
};
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3600;

const jsonData = require("./data.json");

app.use(bodyParser.json());
app.use(cors(cors_options));

app.get("/", (req, res) => {
  res.json(jsonData);
});
app.listen(PORT, () => console.log("Server Running on " + PORT));
