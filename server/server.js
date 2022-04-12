const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Leonella123$",
  database: "PennyJuice",
});

db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("connected");
  }
});

app.get("/form", (req, res) => {
  const insertQ = "SELECT * FROM PennyJuice.contact_form;"
  db.query(insertQ, (err, result) => {
    res.send(result)
  })

})

app.post("/api/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;

  const sqlInsert =
    "INSERT INTO PennyJuice.contact_form(firstName, lastName, email, phoneNumber, message) VALUES (?,?,?,?,?);";
  db.query(
    sqlInsert,
    [firstName, lastName, email, phoneNumber, message],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
