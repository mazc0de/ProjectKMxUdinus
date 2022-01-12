const public = require("express").Router();

public.get("/", (req, res) => {
  res.render("main", {
    title: "Batu Gunting Kertas",
  });
});

public.get("/game", (req, res) => {
  res.render("suwit", {
    title: `Let's play!`,
    layout: "suwit",
  });
});

module.exports = public;
