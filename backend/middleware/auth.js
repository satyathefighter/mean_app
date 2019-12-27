const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token,'WinterIsComingGOT2020', (err,result) => {
        if(err)
        return err;
        else
        return result;
    });
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ 'error': data.message,'message': 'Not authorized to access this resource'});
    }

};
module.exports = auth;