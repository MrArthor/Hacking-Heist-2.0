const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require("./Question");

const CategorySchema = new Schema({
    Category: String,
    Questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],

})
module.exports = mongoose.model("Categories", CategorySchema);