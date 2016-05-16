//Remember to run 'npm start' when trying to run this app.

//set up application, require all the NPM modules that we need. 

var express         = require('express');
var app             = express();
var server          = require('http').createServer(app);
var port            = process.env.PORT || 9000
var bodyParser      = require('body-parser')
var emailFactory    = require('./modules/emailFactory.js')

//tell our application to serve all files within the public directory
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
//Configure MiddleWare - (morgan for logging out activity in temrinal)
//app.use(morgan('dev'));
//app.use(cors())
//Tell the app to route all requests through the 'routes.js' file
app.get('/', function (req, res) {
    res.render('index.html');
});
app.put('/api/contact', function(req, res){
  console.log(req.body)
  emailFactory.sendContactReq(req.body, res)
});

//start server on defined port 
//will spawn a chrome window 
server.listen(port, function () {
    console.log('Server has been started on port %s ...', port);

    //DEV ONLY 
    //will spawn a chrome window using following URL
    //open('http://localhost:9000');
    //if (window.location.href.indexOf('localhost') < 0) {
    //    window.location = 'http://localhost:9000/';
    //}
})
