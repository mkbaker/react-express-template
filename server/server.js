const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//routers
const movieRouter = require('./routes/movie.router');
const genreMovieRouter = require('./routes/genre-movie.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true})); //IS THIS THE CORRECT PLACE FOR THIS?
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies', movieRouter);
app.use('/genres', genreMovieRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});