
var express =require('express')
var body_parser = require('body-parser')
var CardController = require('./api/CardController')
var app = express()
const dotenv = require('dotenv');
dotenv.config();

var PORT =  process.env.PORT || 7777 ;

app.use(function(req, res, next) {
    
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
  });
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.get("/card/fetch",CardController.get);
app.post("/card/add",CardController.addCreditCardInfo);


app.listen(PORT,()=>{
    console.log("Credit Card Node Started on port number "+process.env.PORT)
})

module.exports = app; // for testing


