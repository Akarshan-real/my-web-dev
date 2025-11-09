// script.js 
import express from "express";
import mongoose from "mongoose";
import check from "./models/check.js";

await mongoose.connect('mongodb://localhost:27017/check');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.post("/add", async (req, res) => {
    const names = ["Aarav", "Riya", "Kabir", "Simran", "Arjun"];
    const surnames = ["Mehta", "Sharma", "Patel", "Kaur", "Singh"];
    const salaries = [85000, 92000, 78000, 105000, 99000];
    const languages = ["JavaScript", "Python", "C++", "Java", "Go"];
    const cities = ["Mumbai", "Bangalore", "Hyderabad", "Delhi", "Pune"];

    const checking = new check({
        name: names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)],
        salary: salaries[Math.floor(Math.random() * salaries.length)],
        language: languages[Math.floor(Math.random() * languages.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        isManager: Math.random() < 0.3 ? true : false
    });

    await checking.save();

    res.status(201).send({msg : "done lil bro"});
});

app.listen(port, () => {
    console.log(port);
});