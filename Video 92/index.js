const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Nike";
    let searchText = "Search Now";
    let arr = ["WoooUU",54,65];
    res.render("index", { siteName : siteName, searchText : searchText , arr });
});

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Nike why and when";
    let blogContent = "Very Reputed brand";
    res.render("index", {siteName: "Nike Blog",searchText: "Search Blog", blogTitle: blogTitle, blogContent: blogContent });
}); 
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
