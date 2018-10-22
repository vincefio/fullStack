import React, { Component } from 'react'
import axios from 'axios'

export default class Flashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDoc: [],
            cards: []
        }
    }

    componentWillMount() {
        //create a post request to get data from mongo
        axios.post('/displayCard', {
            id: this.props.id
        })
            .then((response) => {
                console.log(response.data.cards);
                this.setState({
                    currentDoc: response.data,
                    cards: response.data.cards
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        console.log('component will mount')
        console.log(this.state)
    }

    componentDidMount() {
        //loop through state to display card in proper manner
        console.log('componet did mount')
        console.log(this.state.cards)
    }

    render() {
        const flashcard = this.state.currentDoc;

        return (
            <div>
                <h1>{flashcard.projectName}</h1>
                <h2></h2>
                <div className="flashcardDisplay row">
                    <div className="flashcardFront col s6">
                        <h2></h2>
                    </div>
                    <div className="flashcardBack col s6">
                        <p>back</p>
                    </div>
                </div>
            </div>
        )
    }
}
