const express = require("express");
const pool = require('../modules/pool');
const router = express.Router();

//get all movies
router.get("/", (req, res) => {
    pool.query()
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log('error', error);
            res.sendStatus(500);
        })
    
});

router.put("/", (req, res) => {
    pool.query()
    .then((result) => {
        res.send(result.rows);
    }).catch(error => {
        console.log('', error);
        res.sendStatus(500);
    })
})














module.exports = router; 