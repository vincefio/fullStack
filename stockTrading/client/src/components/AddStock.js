import React, { Component } from 'react'

export default class AddStock extends Component {
    constructor() {
        super()
        this.state = {
            stockName: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()
        console.log('submit')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="row container">
                <form>
                    <h3>Add Stock</h3>
                    <div className="input-field col s12 row">
                        <input name="stockName" onChange={this.handleChange} value={this.state.stockName} id="stockChoice" type="text" className="validate"></input>
                        <label className="active" htmlFor="stockName">ex. "AAPL"</label>
                    </div>
                    <div className="row">
                        <button onClick={this.onSubmit} id='stock-submit' className="btn waves-effect waves-light submitButton" value="Submit">Submit</button>
                    </div>

                </form>
            </div>

        )
    }
}
