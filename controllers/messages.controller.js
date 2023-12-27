const path = require('path');

function getMessage(req, res) {
  res.sendFile(path.join(__dirname , '..' , 'public' , 'skimountain.jpg'));
}

function postMessage(req, res) {
  console.log("Updating messages ...");
}

module.exports = {
    getMessage , 
    postMessage
}