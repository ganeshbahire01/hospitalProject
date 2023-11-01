const mongoose = require("mongoose");

// link MongoDB to api
const connection = mongoose.connect(
  "mongodb+srv://ganesh:ganesh@cluster0.6d4ur0f.mongodb.net/hospital?retryWrites=true&w=majority"
);

module.exports = connection;
