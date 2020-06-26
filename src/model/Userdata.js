const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema Definition
const Schema = mongoose.Schema;

//Schema for single user using constructor
const UserSchema = new Schema({
    type: String,
    fname: String,
    lname: String,
    phone: String,
    email:String,
    password:String
});
//To use schema convert to model. Document is instance of model
//collectionname 1st arg, 2nd arg-schema created
var Userdata = mongoose.model('userdata', UserSchema);
//userdata is singular. collection name will automatically userdatas collection name
//to use it, export it. 
module.exports = Userdata;

