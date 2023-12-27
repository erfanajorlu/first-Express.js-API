const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.url} ${req.method} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriends);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessage);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
