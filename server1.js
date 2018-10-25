var express = require("express"),
morgan = require("morgan"),
path = require("path"),
app = express()

//================configuration===================//
app.use(express.static(__dirname + "/public"))
app.use(morgan("dev"))

app.use("/",function(req,res){
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"))
})
//=====================start server ================//
app.listen(8081,function(){
    console.log("connectec to frontend server")
})