const mongoose = require('mongoose')
const schema = mongoose.Schema();


const blogSchema = new mongoose.Schema({
    titleName: {
        type: String,
      },
      description: {
        type: String,
      },
},{timestamps: true})
module.exports = mongoose.model('blogPost',blogSchema);