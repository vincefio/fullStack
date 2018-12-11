const initialState = {
    myStocks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        /*case "FETCH_MY_STOCKS":
            console.log('display reducer fetch')
            return {
                ...state,
                myStocks: action.payload
            }
        case "DELETE_STOCK":
            console.log('DELETE_STOCK reducer')
            let payload = action.payload
            let newStockResults = state.myStocks.filter(
                stock => stock._id !== payload
            )
            return {
                ...state,
                myStocks: newStockResults
            }*/
        default:
            return state;
    }

}