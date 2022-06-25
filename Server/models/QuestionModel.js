const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Categories = require("./CategoriesModel");
const Answers = require("./AnswerModel");

const QuestionSchema = new Schema({
    QuestionName: String,
    Category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    Answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answers'
    }],

})
module.exports = mongoose.model("Question", QuestionSchema);