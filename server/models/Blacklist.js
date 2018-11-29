const mongoose = require('mongoose');

const BlacklistSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Blacklist', BlacklistSchema);
