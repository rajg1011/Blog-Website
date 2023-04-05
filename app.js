const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const item1 =
  "In the pursuit of knowledge, data (US: /ˈdætə/; UK: /ˈdeɪtə/) is a collection of discrete values that convey information, describing quantity, quality, fact, statistics, other basic units of meaning, or simply sequences of symbols that may be further interpreted. A datum is an individual value in a collection of data. Data is usually organized into structures such as tables that provide additional context and meaning, and which may themselves be used as data in larger structures. Data may be used as variables in a computational process.[1][2] Data may represent abstract ideas or concrete measurements.[3] Data is commonly used in scientific research, economics, and in virtually every other form of human organizational activity. Examples of data sets include price indices (such as consumer price index), unemployment rates, literacy rates, and census data. In this context, data represents the raw facts and figures which can be used in such a manner in order to capture the useful information out of it.";

const dataArray = new Array();

app.get("/", (req, res) => {
  res.render("home", { item1: item1, dataArray: dataArray });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/compose", (req, res) => {
  res.render("partial/compose.ejs");
});

app.post("/", (req, res) => {
  const data = { title: req.body.composeDay, composeMessage: req.body.compose};
  dataArray.push(data);
  res.redirect("/");
});

app.get("/posts/:headtitle", (req, res) => {    //To make dynamic links for webpages
  dataArray.forEach((ele) => {
    if (_.lowerCase(ele.title) == _.lowerCase(req.params.headtitle)) {       //lodash,lowerCase= all are in lower case now to make link in lowercase
      console.log("Matched")
      res.render("partial/post", { upper: ele.title, lower: ele.composeMessage });
    }
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server Is Started");
});
