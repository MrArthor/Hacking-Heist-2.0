const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Categories = require("./Categories");
const Answers = require("./Answer");

const QuestionSchema = new Schema({
    QuestionName: String,
    Category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    Answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],

})
module.exports = mongoose.model("Question", QuestionSchema);