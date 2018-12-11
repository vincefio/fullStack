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
    console.log(`get stock data ${JSON.stringify(stocksToGraph)}`)
    //console.log(`get stock data ${stocksToGraph[1].name}`)
    for (var i = 0; i < stocksToGraph.length; i++) {

        axios.get(`https://api.iextrading.com/1.0/stock/${stocksToGraph[i].name}/chart/1y`)
            .then((response) => {
                //console.log(response);

                //console.log(randArr)
                //console.log(JSON.stringify(stocksToGraph[i]))
                //var name = store.getState().stocks.myStocks[i].name
                num++
                console.log(store.getState().stocks.myStocks[num])
                console.log(num)

                dispatch({
                    type: "HANDLE_DATA",
                    // payload: { name: response }
                    payload: response
                })

            })

            .catch(function (error) {
                console.log(error);
            });
    }
}