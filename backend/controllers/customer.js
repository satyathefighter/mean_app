//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

//GET HTTP method to /bucketlist
router.get('/', auth , async (req, res)  => {
    res.send(req.user);
});
router.post('/', async (req,res) => {
    // Create a new user
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});
router.post('/login', async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
         const token = await user.generateAuthToken();
         res.send({ user, token });
    } catch (error) {
        res.status(400).send({ error : error.message});
    }
});
router.post('/alluser', auth , async (req,res) => {
    try {
        let  {sort , page , limit} = req.body;
        const users = await User.getAllUser(page, sort, limit);
        res.send({ users });
    } catch (error){
        res.status(500).json({
            message: error
        });
    }
});
router.post('/logout', auth , async (req,res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        });
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/logoutAll', auth , async (req,res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length);
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;