import axios from 'axios'

export const getMyStocks = () => dispatch => {
    //below is the componentDidMount function from myStocks
    /* var self = this
 
     axios.get('/myStocks')
         .then(function (response) {
             //console.log(response);
 
             self.setState({
                 mystocks: response.data
             })
         })
         .catch(function (error) {
             console.log(error);
         });*/

    axios.get('/myStocks')
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
        })
}