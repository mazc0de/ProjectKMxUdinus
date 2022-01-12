// express
const express = require("express");
const app = express();
const port = 4000;

const path = require("path");

// middleware login
const session = require("express-session");
app.use(
  session({
    secret: "very secret",
    resave: true,
    saveUninitialized: true,
  })
);

// morgan logger middleware
const morgan = require("morgan");
app.use(morgan("tiny"));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public files
app.use(express.static("public"));

// method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// handlebars
const handlebars = require("express-handlebars");
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts/",
    defaultLayout: "main",
    partialsDir: __dirname + "/views/partials/",
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

// router
app.use(require("./routes/user.route"));
app.use(require("./routes/game.route"));

app.get("/server-error", (req, res) => {
  res.status(500);
  throw new Error("Server error");
});

app.use("/", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname + "/views/404.html"));
});

app.use(require("./middleware/error"));

// init server
app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
