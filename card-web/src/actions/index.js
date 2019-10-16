

export const addNewCardDetails = (cardDetails) => {
    return {
        type: "NEW_CARD", payload: {
            id: cardDetails.id,
            name: cardDetails.name,
            cnumber: cardDetails.cnumber,
            climit: cardDetails.cnumber
        }
    }
}

export const refreshCardInfo = (cardDetails) => {
    return {
        type: "UPDATE_RECORDS", payload: cardDetails
    };
}