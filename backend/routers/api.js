const product = require('../controllers/product');
const customer = require('../controllers/customer');
const admin = require('../controllers/admin');
module.exports = function(app){
    app.get('/api/', (req, res) => {
        res.send('API works');
    });
    app.use('/api/product',product);
    app.use('/api/user',customer);
    app.use('/api/admin',admin);
};
