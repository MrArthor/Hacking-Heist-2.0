const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    Email: String,
    Password: String,
    Address: String,
    Address_2: String,
    City: String,
    State: String,
    Zip:Number,
})
module.exports = mongoose.model("User", UserSchema);