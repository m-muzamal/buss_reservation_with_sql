const express = require("express");
const mysql = require("mysql");
const twilio = require("twilio");

const app = express();
app.use(express.json());
//  this is connect with imrna yousaf phone number
const accountSid = 'AC00ad6a303845036e8121258e66b717dc';
const authToken = '757c66268a4b09fe2a5e3f87509c7dd6';

const client = twilio(accountSid, authToken);

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "loginsystem",
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", false);
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.post('/api/message', async (req, res) => {

  const { phone_no, message } = req.body;

  console.log({phone_no: req.method, message, body: req.body});

  try{

    await client.messages
    .create({
      body: message,
      from: '+16073072703',
      to: phone_no
    })
    res.status(200).json({message: 'Message sent'});
  } catch (err) {
    res.status(400).json({message: err.message})
  }

});

app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log({result});
    res.json(result);
  });
});

app.post("/api/data", (req, res) => {
  const sql = `INSERT INTO user (username, password, email, cnic, phone) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.cnic}', '${req.body.phone}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get("/api/booking", (req, res) => {
  const sql = "SELECT * FROM booking";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log({result});
    res.json(result);
  });
});

app.post("/api/booking", (req, res) => {
  const { bookingname, bookingphone, bookingcnic, bookingroute, bookingdate, bookingseats, bookingseatno } = req.body;
  const sql = `INSERT INTO booking (bookingname, bookingphone, bookingcnic, bookingroute, bookingdate, bookingseats, bookingseatno) VALUES ('${bookingname}', '${bookingphone}', '${bookingcnic}', '${bookingroute}', '${bookingdate}', '${bookingseats}', '${bookingseatno}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.post("/api/login", (req, res) => {
  const sql = `SELECT * FROM user WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "Invalid email or password!" });
    }
  });
});

app.get("/api/data", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "User not logged in!" });
  }
  
  const userId = req.session.user.id;
  
  const sql = `SELECT * FROM user WHERE id = ${userId}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log({result});
    res.json(result[0]); 
  });
});



app.listen(3001, () => {
  console.log("Server running on port 3001");
});
