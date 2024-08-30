const mongoose = require('mongoose');

function dbConfig(){
    mongoose.connect('mongodb+srv://momiraz25:miraz123@cluster0.jgeqyin.mongodb.net/exam?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
}


module.exports = dbConfig;