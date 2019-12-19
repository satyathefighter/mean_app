// We’ll declare all our dependencies here
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// Connect mongoose to our database
mongoose.connect('mongodb://localhost:27017/mean_app',{ useNewUrlParser: true });
const monDb = mongoose.connection;
monDb.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that', 'mongodb://localhost:27017/bucketlist', 'is running.');
});

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;


//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send("Invalid page");
});

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

require('./router/api')(app);

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
}); 