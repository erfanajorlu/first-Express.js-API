const express = require("express");
const path = require("path");

const messagesRouter = require("./routes/messages.router");
const friendRouter = require("./routes/friends.router");

const PORT = 3000;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/site", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends Are VERYY Clever",
    caption: "Let's go skiing!",
  });
});

app.use("/friends", friendRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
