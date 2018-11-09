import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            category: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        M.updateTextFields();
    }

    handleSubmit(e) {
        e.preventDefault()

        axios.post('/category', {
            title: this.state.category
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e) {
        this.setState({
            category: e.target.value
        })
    }

    render() {
        return (
            <div className="row">

                <form className="col s12 m6">
                    <div className="input-field col s12 m6">
                        <input onChange={this.handleChange} name="category" id="newCategory" type="text" className="validate"></input>
                        <label className="active" htmlFor="newCategory">Add New</label>
                    </div>
                    <button onClick={this.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div >
        )
    }
}
