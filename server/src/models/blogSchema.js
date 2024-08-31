const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
  titleName: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,  
  },
  cover: {           
    type: String,
    required: false, 
  },
}, { timestamps: true });

module.exports = mongoose.model('blogPost', blogSchema);
