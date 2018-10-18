import React, { Component } from 'react'
import AddFlashCard from './AddFlashCard'

export default class ProjectForm extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <label>
                        Name:
                    <input type="text" name="name" />
                    </label>
                    <AddFlashCard />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
