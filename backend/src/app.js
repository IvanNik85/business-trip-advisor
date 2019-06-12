const express = require('express');
require("./db/mongoose");
const userRoutes = require ("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use(userRoutes);

app.listen(port, () => console.log(`Server listening on port: ${port}`));