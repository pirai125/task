const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const cors_options = {
  origin: "http://localhost:5173",
};

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3600;

app.use(bodyParser.json());
app.use(cors(cors_options));

app.use("/", require("./Routes/routefiles"));
app.listen(PORT, () => console.log("Connected on " + PORT));
