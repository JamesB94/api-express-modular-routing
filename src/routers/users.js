const express = require('express')
const router = express.Router()

const gatherUsers = require('../../data')
const users = gatherUsers.users
// console.log('THIS IS THE NEW USERS', users)



router.get("/", (req, res) => {
    res.json({users})
    // res.send("user")
})


router.post("/", (req, res) => {
    const id = users.length + 1
    const newUser = {
        "id":id,
        "email": req.body.email,
    }
    users.push(newUser)
    res.json({users})
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const found = users.find((e) => e.id === Number(id))
    res.json(found) 
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const found = users.find((e) => e.id === Number(id))
    const index = users.indexOf(found)
    users.splice(index, 1)
    res.json(users)
})


// router.put('/:id', (req,res) => {
//     const {id} = req.params;
//     const found = users.find((e) => e.id === Number(id))


// })


module.exports = router