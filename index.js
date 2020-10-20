// going to be creating a basic blog posting website

// express config
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// import Posts
const Post = require('./public/models/posts');

// set EJS as templating engine 
/*
    templates are files with .ejs extension
    and are rendered in the return of a request 
    object using res.render('')
*/
app.set('view engine', 'ejs');

// ejs automatically looks in an arbitrary 'views' directory
// here we change it to our public directory
app.set('views', path.join(__dirname, '/public'));

// serve all files in public 
// app.use(express.static("public"));

// when the user sends request to '/'
// we render the home page template
app.get('/', (req,res) => {
    // .ejs extension not required
    res.render('templates/home');
});
// rendering example requests

    // rendering with dynamic content - in this case just a string
    app.get('/name', (req,res) =>{
        res.render('templates/name', {name: 'Juan'});

    });
    // rendering with an entire object of data
    app.get('/list', (req,res) => {
        // into our rendering we will pass in our data object that contains
        // two key value pairs - the first with a string, the second with an array of strings
        var data = {name:'Juan', yerbaFlavors:['mint', 'blackberry', 'mint again']};

        res.render('templates/list', {data:data});
    });

// blog posts requests

    // rendering the home page with two buttons and a welcome text
    app.get('/app', (req,res) => {
        res.render('app/index');
    });

    // rendering posts that are imported from the Posts object in the posts file
    app.get('/app/posts', (req,res) => {
        const posts = Post.find();
        res.render('app/posts', {posts});
    })

    // rendering a post based on id param using imported Post method
    app.get('/app/posts/:id', (req,res) => {
        const post = Post.findById(req.params.id);
        res.render('app/postById', {post});
    })
app.listen(port, () => console.log(`Example app listening on port ${port}`));