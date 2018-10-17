import React, { Component } from 'react'
import { Button, Icon, Modal } from 'react-materialize'

export default class CardModal extends Component {
    render() {
        /* {frontErrorOptions}
         {backErrorOptions}
         <div>{cardsAdded} cards added</div>
         {addSuccess}*/
        return (
            <div>
                <Modal

                    trigger={<Button className="amber"><i className="fas fa-plus"></i>Add FlashCard</Button>}>
                    <div className="row">
                        <form onSubmit={this.handleAdd} id="addCardForm">
                            <div className="input-field col s6">

                                <h4>Front:</h4>
                                <textarea value={this.state.textAreaFront} onChange={this.handleChange} name="textAreaFront" id="textarea1" className="materialize-textarea validate"></textarea>
                            </div>
                            <div className="input-field col s6">

                                <h4>Back:</h4>
                                <textarea value={this.state.textAreaBack} onChange={this.handleChange} name="textAreaBack" id="textarea2" className="materialize-textarea validate"></textarea>
                            </div>


                            <input className="btn waves-effect waves-light submitButton" type="submit" value="Submit" />
                        </form>
                    </div>

                </Modal>
            </div>
        )
    }
}
