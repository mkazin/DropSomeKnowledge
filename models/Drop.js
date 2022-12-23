const mongoose = require('mongoose')

// TODO: add reactions
// const ReactionSchema = new mongoose.Schema({

const DropSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  submitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tags: {
    type: [String],
    required: false,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Drop', DropSchema)
