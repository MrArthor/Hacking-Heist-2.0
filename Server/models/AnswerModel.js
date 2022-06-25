const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require("./QuestionModel");

const AnswerSchema = new Schema({
    Answer: String,
    Questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],

})
module.exports = mongoose.model("Answers", AnswerSchema);