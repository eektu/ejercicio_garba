const mongoose = require('mongoose')

const BlacklistSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ''
  },
  enabled: {
    type: Boolean,
    default: false
  },
  brand: {
    type: String,
    default: 'URG!arino'
  }
})

module.exports = mongoose.model('Blacklist', BlacklistSchema)
