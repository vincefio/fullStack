import React, { Component } from 'react'
import M from 'materialize-css'

export default class Home extends Component {
    componentDidMount() {
        M.updateTextFields();
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('submit')
    }

    render() {
        return (
            <div className="row">

                <form className="col s12 m6">
                    <div className="input-field col s12 m6">
                        <input id="newCategory" type="text" className="validate"></input>
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
