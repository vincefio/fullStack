import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize'

export default class DisplayFlashCard extends Component {
    constructor(props) {
        super(props);

        this.studyClick = this.studyClick.bind(this)
    }

    studyClick(id) {
        console.log('study id ' + id)
    }

    render() {
        return (
            <div>
                <Modal
                    header='Modal Header'
                    trigger={<Button onClick={this.studyClick(this.props.id)} className='study-button'>Study</Button>}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Modal>
            </div>
        )
    }
}
