const express = require("express");
const pool = require('../modules/pool');
const router = express.Router();

//get all movies
router.get("/", (req, res) => {
    const queryMovies = 'SELECT * FROM "movies"';
    pool.query(queryMovies)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log('error completing SELECT movies query', error);
            res.sendStatus(500);
        })
    
});

//ORDER BY "id" -- not working?? 
router.put("/", (req, res) => {
    console.log('the req body is:', req.body);
    pool.query(`
        UPDATE "movies"
        SET "description" = $1
        WHERE "id" = $2
        ORDER BY "id" ASC;
    `, [req.body.payload.description, req.body.payload.id ])
    .then((result) => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error completing UPDATE movies query', error);
        res.sendStatus(500);
    })
})














module.exports = router; 