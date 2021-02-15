var mysql = require("mysql");

// membuat koneksi database
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbfludekost",
});

conn.connect((err) => {
    if (err) {
        throw err;
        console.log("Database Tidak Terhubung !");
    }
});

module.exports = conn;