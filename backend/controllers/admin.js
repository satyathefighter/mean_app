//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
    res.send('Admin works');
});

module.exports = router;