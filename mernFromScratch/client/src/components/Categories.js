import React, { Component } from 'react'
import axios from 'axios'
import M from 'materialize-css'

export default class Categories extends Component {
    constructor() {
        super()
        this.state = ({
            categories: []
        })
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentWillMount() {
        M.AutoInit()
    }

    componentDidMount() {
        //request category info from db

        //save reference to this to set state inside axios call
        let self = this

        axios.get('/categories')
            .then(function (response) {
                console.log(response.data);
                self.setState({
                    categories: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        let categories = this.state.categories

        return (
            <div>
                <h4>categories</h4>
                {categories.map((category, i) =>
                    <li id={category.id} key={i}>{category.title}</li>
                )}
            </div>
        )
    }
}
