const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const token = jwt.sign({_id: "777gbhybhynuh7" }, "secret");

// console.log(token);

// const decoded = jwt.verify(token, "secret");
// console.log(decoded);

const password = "sifra";
const hash = bc.hashSync(password, 10);
console.log(hash);
const isMatched = bc.compareSync("neSifra", hash);
console.log(isMatched);

