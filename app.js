var express = require('express')
var app = express()
var router = require('./router.js')

app.use(express.static('./dist'))

//设置跨域访问  
/*app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    //res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
})*/

app.use(router)


app.listen(8888,function() {
	console.log('running.....')
})