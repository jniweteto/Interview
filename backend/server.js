

const router = require('./routes/routes');
const db = require('./configs/database')

var cors = require('cors');
var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
const fileUpload = require('express-fileupload');

/*
Since I will be using an express server, I configure express by 
first creating a new instance assigned to a variable:
*/
var app = express();

/*
I simply assigned the port number of the app to 3000. 
This is the port on the local server which the app will be available.
*/
var port = 3000;


/*Then, I use cors middleware so my can can 
send AJAX requests and receive HTTP responses for resource from other domains (if needed) */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

app.use('/api', router);

/*
Creating an endpoint for the homepage using express with. This page will allow me to upload a file:
I would require other static files such as CSS and JS in our HTML script, 
use the express.static() method to specify the directory of the files. 
These static files will be in our backend directory as well:
*/
app.use(express.static(__dirname + '/public/'));


//Next, set up the listening port of the app with:
db(() => {
    app.listen(port, (err, res) => {
        if (err) throw err;

        console.log('The app is listening on port ' + port);
    });
});


