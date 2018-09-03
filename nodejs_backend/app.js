
var express = require('express');

var app=express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){

	res.send('首页');



})

app.post('/dologin',function(req,res){

	console.log(req.body);

 	res.json({"msg":'post成功'});



})

app.get('/news',function(req,res){

	//console.log(req.body);

	res.jsonp({"msg":'这是新闻数据'});

})




app.listen(3000,'127.0.0.1');