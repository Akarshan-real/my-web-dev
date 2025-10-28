const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
// app.use(express.static('file'));


// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/about', (req, res) => {
  res.send('Hello about us!');
});

app.get('/contact', (req, res) => {
  res.send('Hello contact me!');
});

app.get('/blog', (req, res) => {
  res.send('Hello blog!');
});

app.get('/blog/:slug',(req,res) => {

    // for URL http://127.0.0.1:3000/blog/intro-to-sayeri?mode=dark&region=in
    console.log(req.params) ;// will output {slug: 'intro-to-programming'}
    console.log(req.query) ;// will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`);
});

// app.get('/blog/:slug/:second', (req, res) => {
//     // logic to fetch {slug} from the db
//   res.send(`Hello ${req.params.slug} and ${req.params.second}`);
// });

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//   res.send('Hello intro to js!');
// });

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch python to js from the db
//   res.send('Hello intro to python!');
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
