import axios from 'axios'

export const deleteStock = (id) => dispatch => {
    //var self = this
    console.log(`delete stock ${id}`)
    axios.delete(`/delete/${id}`)
        .then(function (response) {
            //console.log(`response displayAction ${JSON.stringify(response)}`);

            dispatch({
                type: "DELETE_STOCK",
                payload: id
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}