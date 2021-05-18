import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class SelectBeast  extends React.Component{
    render(){
    return(
       <>
       <Modal show={this.props.show}>
        <Modal.Header closeButton>
        <Modal.Title>{this.props.element.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.element.image_url} className="img-fluid"/></Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideModal}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

       </> 
        )
    }
}
export default SelectBeast;