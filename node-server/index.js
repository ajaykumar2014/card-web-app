
var express =require('express')
var body_parser = require('body-parser')
var CardController = require('./api/CardController')
var app = express()

var PORT =  7777 ;

app.use(function(req, res, next) {
    
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
  });
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/card/fetch",CardController.get);
app.post("/card/add",CardController.addCreditCardInfo);


console.log('API END POINT is '+ process.env.API_SERVER_PORT);

app.listen(PORT,()=>{
    console.log("CCard Node Started ....")
})



