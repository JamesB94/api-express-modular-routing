const express = require('express')
const router = express.Router()


const gatherbooks = require('../../data')
const books = gatherbooks.books


router.get("/", (req, res) => {
    res.json(books)
    //  res.send("BOOKS TEST")
})

router.post("/", (req, res) => {
    const id = books.length + 1
    const newBook = {
        id:id,
        "title": req.body.title,
        "type": req.body.type,
        "author": req.body.author
    }
    books.push(newBook)
    res.json({books})
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const found = books.find((e) => e.id === Number(id))
    res.json(found) 
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const found = books.find((e) => e.id === Number(id))
    const index = books.indexOf(found)
    books.splice(index, 1)
    res.json(books)
})








module.exports = router
