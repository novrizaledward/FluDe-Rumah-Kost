const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parser application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil routers
var routers = require("./routers");
routers(app);

app.listen(3000, () => {
    console.log(`Server Sedang Berjalan !`);
});