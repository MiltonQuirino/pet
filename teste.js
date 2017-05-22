var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

// Add this line below
app.use(bodyParser.urlencoded({ extended: false })) 

app.use(bodyParser.json());

app.get('/', function(req, res){
    console.log('GET');
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    var username = req.body.username;
    console.log(req.body)
    //res.send('<h1>Hello</h1> '+username);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});