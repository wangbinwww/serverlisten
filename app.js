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

app.listen(3000, () => {
    console.log(moment().tz("Asia/bejing").format())
    console.log("http://localhost:3000")
})