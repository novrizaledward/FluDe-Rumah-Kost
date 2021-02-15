"use strict";

var response = require("./res");
var connection = require("./connection");

exports.index = function(req, res) {
    response.ok("Welcome Rest API Rumah Kost Menggunakan Node JS", res);
};