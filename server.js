var express = require("express");
var upload = require('jquery-file-upload-middleware');
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './public/index.html'));
})



app.listen(PORT, function () {
    console.log("Listening on Port: ", PORT)
});