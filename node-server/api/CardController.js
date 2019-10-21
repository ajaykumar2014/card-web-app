var CardValiator= require('./CardValiator')
const LocalDBStore = require('../store/LocalDBStore')


exports.addCreditCardInfo = (req,res) =>
{
    let cardInfo = JSON.parse(JSON.stringify(req.body));
    let cardNumber = cardInfo.cnumber;
    let callBackRes = {
        code:200,
        status:"success",
        message:"Card added successfully."
    }
    if(CardValiator.ccvalidate(cardNumber)){
        LocalDBStore.save(cardInfo)
    }else{
        callBackRes.status="fail"
        callBackRes.message = "Card validation failed, please enter correct card number!"
    }
    res.send(callBackRes)
}

exports.get = (req,res) =>{
    res.send(LocalDBStore.fetchAll());
}


