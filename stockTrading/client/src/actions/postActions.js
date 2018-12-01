
import { FETCH_STOCKS, NEW_POST } from './types';
import axios from 'axios'

export const fetchStocks = () => dispatch => {
    console.log('fetch posts')
    var randArr = []

    axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
        .then((response) => {
            console.log(response);
            //generate 50 random numbers, put in array
            for (var i = 0; i < 50; i++) {
                var randNum = Math.floor(Math.random() * response.data.length)
                randArr.push(response.data[randNum])
            }
            console.log(randArr)
            /*this.setState({
                randomStocks: randArr
            })*/
            setTimeout(() => {
                // Yay! Can invoke sync or async actions with `dispatch`
                dispatch({
                    type: FETCH_STOCKS,
                    payload: randArr
                })
            }, 1000);

        })/*
        .then(response => {

        })*/
        .catch(function (error) {
            console.log(error);
        });

    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_STOCKS,
                payload: posts
            })
        );*/
};
