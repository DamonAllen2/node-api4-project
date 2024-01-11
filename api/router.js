const express = require('express');

const router = express.Router();

const users = [
    {
       name: "Damon",
       password: "DamonRocks!"
    },
    {
       name: "Autumn",
       password: "AutumnRocks!"
    },
    {
       name: "Kayden",
       password: "KaydenRocks!"
    },
   ]

router.get('/users', (req, res) => {
    res.status(200).json(users)
})
router.post('/register', (req, res) => {
    const newUser = {
        name: req.body.name, 
        password: req.body.password
    }
    if(!req.body.name || !req.body.password) {
        res.status(400).json('you need name and password')
    } else {
        users.push(newUser);
        res.status(200).json(users)
    }
    
})

router.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.status(400).json('you need name and password');
    } else {
        res.status(200).json(`Welcome, ${name}`)
    }
})

module.exports = router;