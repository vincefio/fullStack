
//import { FETCH_STOCKS, NEW_POST } from './types';
import axios from 'axios'

export const fetchStocks = () => dispatch => {
    console.log('fetch posts')
    var randArr = []

    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then((response) => {
            //console.log(response);
            //generate 50 random numbers, put in array
            for (var i = 0; i < 50; i++) {
                var randNum = Math.floor(Math.random() * response.data.length)
                randArr.push(response.data[randNum])
            }
            //console.log(randArr)

            dispatch({
                type: "FETCH_STOCKS",
                payload: randArr
            })

        })

        .catch(function (error) {
            console.log(error);
        });
};

export const addStock = (symbol, id) => dispatch => {
    console.log('add stock')
    //add stock to database, limit this to 5
    axios.post('/newStock', {
        name: symbol,
        id: id
    })
        .then(function (response) {
            console.log(response);
            dispatch({
                type: "ADD_STOCK",
                payload: symbol
            })
        })
        .catch(function (error) {
            console.log(error);
        });


}
