const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const Flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError");

const methodOverride = require("method-override");
const Passport = require("passport");
const LocalPassport = require("passport-local");
const MongoSanitize = require('express-mongo-sanitize');
const app = express();

const User = require("./models/userModel");
const Question = require("./models/QuestionModel");
const Answers = require("./models/AnswerModel");
const Categories = require("./models/CategoriesModel");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Ansed", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
mongoose.set('useFindAndModify', false);



app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "View"));
app.use(MongoSanitize());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'Public')))
const SessionConfig = {
    secret: 'Thisshoudbebettersecret1',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


app.use(session(SessionConfig))
app.use(Flash())

app.use(Passport.initialize());
app.use(Passport.session());

// Passport.use(new LocalPassport(User.authenticate()));
// Passport.serializeUser(User.serializeUser());
// Passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.Error = req.flash('error');
    res.locals.CurrentUser = req.user;
    next();
})

app.get("/Categories", async(req, res) => {
    const Category = await Categories.find({});
    res.json(Category);
});

app.get("/Category/:Id", async(req, res) => {

    console.log(req.params.Id);
    const CategoryQuestion = await Categories.find({ Category: req.params.Id }).populate('Questions');
    res.json(CategoryQuestion);
});
app.get("/Category/:Id/:Question", async(req, res) => {
    const QuestionAndAnswers = await Question.find({ _id: req.params.Question }).populate('Answers').populate('Answers.Question');
    res.json(QuestionAndAnswers);
});

app.get("/", (req, res) => {
    res.json("home");
});

app.all("*", (req, res, next) => {
    next(new ExpressError("What The Now??????", 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
});

app.listen(9483, () => {
    console.log("Serving on port 9483");
});