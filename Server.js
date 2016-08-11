/**
 * Created by christinachen on 8/10/16.
 */
var express = require("express");
var app = express();
var router = express.Router();
// __dirname points to current working directory.
var path = __dirname + '/views/';

router.use(function(req, res, next) {
    console.log('/'+ req.method);
    return next();
});

// Response methods
// - Sends response to client
// - Terminate request-response cycle
router.get('/*', function(req, res) {
    res.sendFile(path + 'index.html');
});

/*router.get('/about', function(req, res) {
    res.sendFile(path + 'about.html');
});

router.get('/contact', function(req, res) {
    res.sendFile(path + 'contact.html');
});*/

app.use(express.static('bower_components'));
app.use(express.static('js'));
app.use(express.static('img'));

// Tells Express to use Routes defined above.
app.use('/', router);

// Assign routes in order.
// This executes when a request does not match any route.
app.use('*', function(req, res) {
    res.sendFile(path + '404.html');
});

app.listen(8000,function(){
    console.log("Live at Port 8000");
});