import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';

export default class RatingCustomerToCS extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    handleShow = () => {
        this.setState({show: !this.state.show});
    }

  render() {
    return (
        <div className="rating">
            <Button onClick={() => this.handleShow()}>Rate</Button>
                <Modal show={this.state.show} >
                    <Modal.Header>Modal Head Part</Modal.Header>
                    <Modal.Body>
                        Hi, Kim Taehyung
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.handleShow()}>
                            Close 
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
  }
}