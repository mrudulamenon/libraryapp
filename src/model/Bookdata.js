const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema Definition
const Schema = mongoose.Schema;

//Schema for single book using constructor
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});
//To use schema convert to model. Document is instance of model
//collectionname 1st arg, 2nd arg-schema created
var Bookdata = mongoose.model('bookdata', BookSchema);
//bookdata is singular. collection name will automatically bookdatas collection name
//to use it, export it. 
module.exports = Bookdata;

