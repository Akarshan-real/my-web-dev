const express = require('express')
const blogs = require('./routes/blog')
const app = express()
const port = 3000
const fs = require('fs');

app.use('/blog', blogs);
app.use(express.static('public'));

// Middleware 1 - Logger for our app
app.use((req, res, next) => {
    console.log(req.headers) ;
    req.name = "I am harry" ;
    fs.appendFileSync('logs.txt',`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`) ;
    // res.send('Hacked by middleware 1');
    next();
});

// Middleware 2
app.use((req, res, next) => {
    req.name = "I am akarshan" ;
    console.log('m2');
    next();
});

app.get('/', (req, res) => {
    res.send('<button>Hello World!</button>');
});

app.get('/about', (req, res) => {
    res.send('Hello about!'+ " " + req.name);
});
app.get('/name', (req, res) => {
    res.send(`Hello ${req.name}`);
});
app.get('/contact', (req, res) => {
    res.send('Hello contact!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
