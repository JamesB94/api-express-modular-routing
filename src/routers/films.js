const express = require('express')
const router = express.Router()

const gatherfilms = require('../../data')
const films = gatherfilms.films


router.get("/", (req, res) => {
    res.json(films)
    //res.send("FILMS TEST")
})

router.post("/", (req, res) => {
    const id = films.length + 1
    const newFilm = {
        id:id,
        "title":req.body.title , 
        "director":req.body.director , 
    }
    films.push(newFilm)
    res.json({films})
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const found = films.find((e) => e.id === Number(id))
    res.json(found) 
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const found = films.find((e) => e.id === Number(id))
    const index = films.indexOf(found)
    films.splice(index, 1)
    res.json(films)
})








module.exports = router