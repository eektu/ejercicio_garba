const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ''
  },
  brand: {
    type: String,
    default: 'URG!arino'
  },
  description: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Product', ProductSchema)
