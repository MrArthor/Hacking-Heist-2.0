const mongoose = require('mongoose');
const Categories = require('../models/CategoriesModel');
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
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
    for (let i = 0; i < 10; i++) {
        const Cat = new Categories({
            Cateogry: 'Laptops',
        })


        await Cat.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})