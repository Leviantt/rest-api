const mongoose = require('mongoose')
const formatDate = require('../utils/formatDate.js')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isFree: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: String,
    required: true,
    default: formatDate(new Date())
  },
  updatedAt: {
    type: String,
    required: true,
    default: formatDate(new Date())
  }
})

module.exports = mongoose.model('User', userSchema)