const mongoose = require('mongoose')
const { Schema } = mongoose;

const postSchema = new Schema({
  title:      { type: String },
  postHTML:   { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)