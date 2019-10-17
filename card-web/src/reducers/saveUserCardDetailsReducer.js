export const saveUserCardDetailsReducer = (state = {cardInfoDetails:[]},action)=>{
    switch(action.type){
        case "NEW_CARD":
            return {cardInfoDetails:state.cardInfoDetails.concat(action.payload)}
        case "UPDATE_RECORDS":
            return {cardInfoDetails:action.payload}    
        default:
            return state;   
    }
}