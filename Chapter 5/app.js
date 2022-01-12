// setup express
const express = require("express");
const app = express();
const port = 1337;

// setup static public file
app.use(express.static("public"));
const path = require("path");

// json parser
app.use(express.json());

// setup handlebars
const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    defaultLayout: "index",
    extname: "hbs",
  })
);

app.use("/", require("./routes/public"));
app.use("/api", require("./routes/users"));

app.get("/server-error", (req, res) => {
  res.status(500);
  throw new Error("Server error");
});

app.use("/", (req, res) => {
  res.status(404).json({
    status: "FAIL",
    data: {
      message: "Oops! page not found!",
    },
  });
});

app.use(require("./middleware/error"));

app.listen(port, () => {
  console.log(`Suwit Game - Listening at http://localhost:${port}`);
});
