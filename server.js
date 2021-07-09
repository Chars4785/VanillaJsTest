// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

app.get('/getFile', function(req,res) {
    console.log("get req",req.body)
    res.send([
        {name:'고양이',value:'images/sample_image.jpg'},
        {name:'파일',value:'images/file.png'}
    ]);
})
app.put('/', function(req,res) {
    console.log("put req",req.body)
    res.send("put");
})
app.post('/', function(req,res) {
    console.log("post req",req.body)
    res.send("post");
})

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

