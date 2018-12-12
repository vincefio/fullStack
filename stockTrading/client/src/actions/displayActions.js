import axios from 'axios'
import store from '../store.js'

export const getStocks = () => dispatch => {
    const currentStocks = store.getState().stocks.myStocks

    dispatch({
        type: 'TRANSFER_STOCKS',
        payload: currentStocks
    })
}

export const getStockData = () => dispatch => {
    var stocksToGraph = store.getState().stocks.myStocks
    var num = -1
    var name
    console.log(`get stock data ${JSON.stringify(stocksToGraph)}`)
    //console.log(`get stock data ${stocksToGraph[1].name}`)
    for (var i = 0; i < stocksToGraph.length; i++) {

        axios.get(`https://api.iextrading.com/1.0/stock/${stocksToGraph[i].name}/chart/1y`)
            .then((response) => {
                //console.log(response);

                num++

                //console.log(num)
                name = store.getState().stocks.myStocks[num].name
                //console.log(name)

                dispatch({
                    type: "HANDLE_DATA",
                    payload: { name: name, data: response }
                    // payload: response
                })

            })

            .catch(function (error) {
                console.log(error);
            });
    }
}