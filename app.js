const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');

//宣告一个app把express引入，之后就可以使用里边的方法。
var app = express();
//用json解析前端传过来的资讯。
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.status(200).json({
        message: "hello word!"
    });
});

//监听3000端口，用于接收传过来的信息。
app.listen(3000, () => {
    //console.log(moment().tz("Asia/Taiwan").format('LLLL'))
    console.log(moment().format())
    console.log("http://localhost:3000")
})