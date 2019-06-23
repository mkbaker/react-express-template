const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


//get genre and movie info from join table genres_movies
router.get("/", (req, res) => {
    pool.query(`SELECT "movies"."title", "movies"."id", "genres"."name"
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