import React, { Component } from 'react'
import axios from 'axios'
import M from 'materialize-css'
import { Button } from 'react-materialize'

export default class Categories extends Component {
    constructor() {
        super()
        this.state = ({
            categories: []
        })

        this.componentDidMount = this.componentDidMount.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
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

    onDeleteClick(id) {
        console.log('delete clicked')
    }

    render() {
        let categories = this.state.categories

        return (
            <div>
                <h4>categories</h4>
                {categories.map((category, i) =>
                    <div key={category._id}>
                        <Button className="project-delete right red" onClick={this.onDeleteClick.bind(this, category._id)}><i className="material-icons">clear</i></Button>
                        <div class="category" id={category.id} key={i}>{category.title}</div>
                    </div>

                )}
            </div>
        )
    }
}
