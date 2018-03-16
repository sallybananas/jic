const express = require("express");
const upload = require('jquery-file-upload-middleware');
const bodyParser = require("body-parser");
const app = express();
const multer = require('multer');
const upload2 = multer(); 
const session = require('express-session');
// const cookieParser = require('cookie-parser');
var mongoose = require("mongoose");
const path = require('path');

//Express sessions
app.set('view engine', 'pug');
app.set('views', './views');

var PORT = process.env.PORT || 3000;

function userSetup(req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            login: false,
        }
    } 
    next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload2.array());
// app.use(cookieParser());
app.set('trust proxy', 1)
app.use(session({
    secret: 'jic',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))




// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public/assets"));
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/api-routes.js")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/jic";

// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

db.on('error', function(err) {
    console.log("Mongoose Error: ", err);
});

db.once('open', function() {
    console.log('Mongoose connection successful.');
});


app.get('/', function (req, res) {
    console.log("test");
    console.log("cookies", req.cookies);
    console.log("session", req.session);
    console.log("did this console?");
    res.sendFile(path.join(__dirname + '/public/index.html'));
    
});


app.listen(PORT, function () {
    console.log("Listening on Port: ", PORT)
});