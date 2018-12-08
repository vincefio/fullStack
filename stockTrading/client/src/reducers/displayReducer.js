const initialState = {
    myStocks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_MY_STOCKS":
            console.log('reducer fetch')
            return {
                ...state,
                myStocks: action.payload
            }

        default:
            return state;
    }

}