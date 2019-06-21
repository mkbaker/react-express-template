const express = require("express");
const pool = require('../modules/pool');
const router = express.Router();

//get all movies
router.get("/", (req, res) => {
    const queryMovies = 'SELECT * FROM "movies"';
    pool.query(queryMovies)
        .then((result) => {
            res.send(result.rows);
        }).catch(error => {
            console.log('error completing SELECT movies query', error);
            res.sendStatus(500);
        })
    
});















module.exports = router; 