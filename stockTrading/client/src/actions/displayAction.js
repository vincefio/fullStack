import axios from 'axios'

/*export const getMyStocks = () => dispatch => {
    //below is the componentDidMount function from myStocks
    /* axios.get('/myStocks')
         .then(function (response) {
             console.log('my stocks ' + JSON.stringify(response.data))
 
             //dispatch response
             dispatch({
                 type: "FETCH_MY_STOCKS",
                 payload: response.data
             })
         })
         .catch(function (error) {
             console.log(error)
         })*/
//}

export const deleteStock = (id) => dispatch => {
    //var self = this
    console.log(`delete stock ${id}`)
    axios.delete(`/delete/${id}`)
        .then(function (response) {
            console.log(`response displayAction ${JSON.stringify(response)}`);

            dispatch({
                type: "DELETE_STOCK",
                payload: id
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}