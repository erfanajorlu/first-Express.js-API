const friends = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.json(newFriend);

}


function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  console.log(friends);
  const id = Number(req.params.friendId);
  const friend = friends[id];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
