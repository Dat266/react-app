const express = require("express");
const mysql = require("mysql");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "reactapp",
});

// connect mysql

db.connect(function (err) {
	if (err) throw err;
	console.log("Connected!!!");
});

// create database

app.get("/createdb", (req, res) => {
	const sql = "CREATE DATABASE reactapp";
	db.query(sql, (err) => {
		if (err) {
			throw err;
		}
		res.send("database created");
	});
});

//create table in db

app.get("/user", (req, res) => {
	const sql =
		"CREATE TABLE user(firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255),password VARCHAR(255))";

	db.query(sql, (err) => {
		if (err) throw err;
		res.status(201).json({
			mesage: "tạo table thành công",
			code: 201,
		});
	});
});

// let del = db._protocol._delegateError;

// del = function (err, sequence) {
// 	if (err.fatal) {
// 		console.trace("fatal error: " + err.message);
// 	}
// 	return del.call(this, err, sequence);
// };

app.post("/register", function (req, res) {
	const sql = "INSERT INTO user SET ?";
	const data = {
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	};

	db.query(sql, data, (err) => {
		if (err) throw err;
		res.status(200).json({
			message: "Đăng kí thành công",
			code: 200,
		});
	});

	// const firstname = req.body.firstname;
	// const lastname = req.body.lastname;
	// const email = req.body.email;
	// const password = req.body.password;

	// db.query(
	// 	"INSERT INTO users (firstname, lastname, email,password) VALUE (?,?,?,?)",
	// 	[firstname, lastname, email, password],
	// 	(err, result) => {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			res.send("Values Inserted");
	// 		}
	// 	}
	// );
});

app.listen("3000", () =>
	console.log("Node server running @http://localhost:3000")
);
