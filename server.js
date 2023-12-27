const express = require("express");

const PORT = 3000;

const app = express();

const friends = [
  {
    id: 0,
    name: "Albert Einsten",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.url} ${req.method} ${delta}ms`);
});

app.use(express.json());


app.post('/friends' ,(req , res) => {
    if(!req.body.name){
        return res.status(400).json({
            error : "Missing friend name"
        })
    }
    
    const newFriend = {
        name : req.body.name,
        id : friends.length 
    }
    friends.push(newFriend);
    res.json(newFriend)

})


app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const id = Number(req.params.friendId);
  const friend = friends[id];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages ...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
