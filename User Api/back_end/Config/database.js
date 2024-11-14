const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
  port: "3308",
});
db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = db;
