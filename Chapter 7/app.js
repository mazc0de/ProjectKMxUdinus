const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const chalk = require("chalk");

app.use(express.json());

const morgan = require("morgan");
app.use(
  morgan(function (tokens, req, res) {
    return chalk.bgGray.bold(
      "METHOD:" + chalk.blue(tokens.method(req, res)) + ", URL:" + chalk.green(tokens.url(req, res)) + ", STATUS:" + chalk.red(tokens.status(req, res)) + ", RESPONSE_TIME:" + chalk.yellow(tokens["response-time"](req, res))
    );
  })
);

app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(chalk.bgRed.white("your app listening at http://localhost:" + PORT));
});
