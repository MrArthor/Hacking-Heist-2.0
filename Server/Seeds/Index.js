const mongoose = require('mongoose');
const Categories = require('../models/CategoriesModel');
const Question = require('../models/QuestionModel');
const Answers = require('../models/AnswerModel');
mongoose.connect('mongodb://localhost:27017/Ansed', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


//Change your user id ( object id of any user that is registered in your database and is in user collection).
const Author = '628cae5c27a25c4230cf4f97';
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];
const seedDB = async() => {
    await Categories.deleteMany({});
    await Question.deleteMany({});
    await Answers.deleteMany({});
    for (let i = 0; i < 1; i++) {
        const Cat = new Categories({
            Category: 'Laptops',
        })


        await Cat.save();
    }
    const cat = await Categories.findOne({ Category: 'Laptops' });
    for (let i = 0; i < 1; i++) {
        const Ques = new Question({
            QuestionName: 'What is the best console game?',
            Category: `${cat._id}`,
        })
        cat.Questions.push(Ques);
        await cat.save();
        await Ques.save();

    }
    const Ques = await Question.findOne({ QuestionName: 'What is the best console game?' });
    for (let i = 0; i < 10; i++) {
        const Ans = new Answers({
            Answer: 'Minecraft',
            Questions: `${Ques._id}`,
        })
        Ques.Answers.push(Ans);
        await Ans.save();
        await Ques.save();

    }

}

seedDB().then(() => {
    mongoose.connection.close();
})