import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
 
export class EditDepModal extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        let url = 'http://localhost:5000/api/';
        fetch(url+'Eventi',{
        method:"Put",
        headers :{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            EventiId:event.target.EventiId.value,
            EventiName:event.target.EventiName.value

        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
},
(error)=>{
    alert('Failed');
})
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size= "lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                     Add Event
                </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>

<Row>
    <Col sm={6}>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="EventiId">
                <Form.Label>EventiId</Form.Label>
                <Form.Control type="text" name="EventiId" required 
                disabled
                defaultValue={this.props.depid}
                placeholder="EventiName"/>

            </Form.Group>
            <Form.Group controlId="EventiName">
                <Form.Label>EventiName</Form.Label>
                <Form.Control type="text" name="EventiName" required 
                efaultValue={this.props.depname}
                placeholder="EventiName"/>

            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                    Update Event
                </Button>
            </Form.Group>

        </Form >
    </Col>
</Row>
</Modal.Body>
<Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>

    </Modal.Footer>


</Modal>



            </div>
        )
    }
}