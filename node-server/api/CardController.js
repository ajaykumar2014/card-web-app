var CardValiator= require('./CardValiator')
var CCardInfoInMemory = [];

exports.addCreditCardInfo = (req,res) =>
{
    let cardInfo = eval(req.body);
    console.log("request card info "+JSON.stringify(cardInfo));
    let cardHolderName = cardInfo.name;
    let cardNumber = cardInfo.cnumber;
    let cardlimit = cardInfo.climit;
    let callBackRes = {
        code:200,
        status:"success",
        message:"Card added successfully."
    }
    if(CardValiator.ccvalidate(cardNumber)){
        console.log("Card is valid");
        CCardInfoInMemory.push(cardInfo)
    }else{
        callBackRes.status="fail"
        callBackRes.message = "Card validation failed, please enter correct card number!"
    }
    res.send(callBackRes)
}

exports.get = (req,res) =>{
    console.log("fetch all credit card details.")
    res.send(CCardInfoInMemory);
}





