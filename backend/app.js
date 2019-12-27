// We’ll declare all our dependencies here
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var jpv = require('jpv');
const port = process.env.PORT || 3000;
require('./database/db');


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
    // var json = {
    //     status : 'OK',
    //     data : {
    //       url : 'http://example.com'
    //     }
    //   };
       
    //   var pattern = {
    //     status : 'OK',
    //     data : {
    //       url : "[url]"
    //     }
    //   };
    //res.send(jpv.validate(json, pattern ));
    res.send("Invalid page");
});

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

require('./routers/api')(app);

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
}); 