const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema Definition
const Schema = mongoose.Schema;

//Schema for single author using constructor
const AuthorSchema = new Schema({
    title: String,
    bestbook: String,
    award: String,
    image: String
});
//To use schema convert to model. Document is instance of model
//collectionname 1st arg, 2nd arg-schema created
var Authordata = mongoose.model('authordata', AuthorSchema);
//authordata is singular. collection name will automatically authordatas collection name
//to use it, export it. 
module.exports = Authordata;

