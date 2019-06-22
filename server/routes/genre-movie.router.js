const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


//get genre and movie info from join table genres_movies
router.get("/", (req, res) => {
    //THIS IS WHAT'S MESSING EVERYTHING UP: THE $1 AND REQ.BODY. AM I DOING THIS RIGHT?
  //const queryGenresMovies = (`SELECT * FROM "genres_movies" WHERE "movie_id"=$1;`, [req.body.id]);
    pool.query(`SELECT "genres_movies"."id", "movies"."title", "genres"."name"
                FROM "movies"
                JOIN "genres_movies" ON "movies"."id"="genres_movies"."movie_id"
                JOIN "genres" ON "genres_movies"."genre_id"="genres"."id"`)
      .then(result => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch(error => {
        console.log("error completing SELECT genres_movies query", error);
        res.sendStatus(500);
      });
    
});















module.exports = router; 