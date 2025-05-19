// npm init
// npm install name --save
// npm uninstall name
// node index.js
// (function(exports, require, module, __filename, __dirname) {})

// console.log("hello");
let costCalculator = require("./util.js");
let os = require("os");
let url = require("url");
let path = require("path");
let fs = require("fs");
let http = require("http");
let mysql = require("mysql"); //npm install mysql

// let xyz = fs.readFileSync("util.js").toString();
// fs.writeFileSync("test.txt", "helo-test");

// fs.readFile("util.js", (err, data) => {
//   console.log(data.toString());
// });
// fs.writeFile("test.txt", "helo-bro", (err) => {
//   console.log(err);
// });
// fs.appendFile / fs.appendFileSync;

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "9997",
  database: "practice",
});

const httpserver = http.createServer((req, res) => {
  const parsedurl = url.parse(req.url, true);
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const username = parsedurl.query.username;
  console.log(username);

  //   conn.connect(() => {
  //     conn.query("INSERT INTO `bill-costs` VALUES (5, 1000, 20)", (err, res) => {
  //       console.log(err);
  //       console.log(res);
  //     });
  //   });

  result = "";
  conn.connect(() => {
    const billtablename = "`bill-costs`";
    const query1 = "SELECT * FROM" + billtablename;
    conn.query(query1, (err, response) => {
      result = JSON.stringify(response);
      res.end(result);
    });
  });
});

httpserver.listen(9999, () => {
  console.log("server started!");
});
