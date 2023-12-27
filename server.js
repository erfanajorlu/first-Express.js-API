const express = require("express");

const messagesRouter = require("./routes/messages.router");
const friendRouter = require('./routes/friends.router');

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/friends' , friendRouter);
app.use('/messages' , messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
