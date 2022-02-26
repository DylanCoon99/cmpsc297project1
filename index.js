const Blockchain = require("./src/blockchain");
const express = require("express");
const morgan = require("morgan");

global.difficulty = 5;

global.blockchain = new Blockchain();

global.transactions = [];

const app = express();

app.use(morgan("dev"));


const port = 8080;

require("./routes")(app);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`);
});
