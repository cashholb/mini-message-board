const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {type: String, required: true, minLength: 3, maxLength: 16},
  message: {type: String, required: true, minLength: 3, maxLength: 150},
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model("messages", MessageSchema);