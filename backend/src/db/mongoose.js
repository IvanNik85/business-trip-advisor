const mongoose = require('mongoose');
const path = require("path");
const fs = require("fs");

const url = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../appconfig.json"))
).dbConnectionUrl;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});