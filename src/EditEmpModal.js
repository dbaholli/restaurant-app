import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
 
export class EditEmpModal extends Component {
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }
    photofilename = "anonymous.png";

    componentDidMount() {
      fetch(process.env.REACT_APP_API + "Eventi")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ deps: data });
        });
    }

    handleSubmit(event) {
      event.preventDefault();
      fetch(process.env.REACT_APP_API + "Constomer", {
        method: "PUT",
        headers :{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ConstomerId:event.target.ConstomerId.value,
            ConstomerName:event.target.ConstomerName.value,
            ConstomerLastName:event.target.ConstomerLastName.value,
            Eventi:event.target.Eventi.value,
            DateOfEvent:event.target.DateOfEvent.value,
            PhotoFileName:this.photofilename,
        }),
    })
    .then((res) => res.json())
    .then(
      (result) => {
        alert(result);
      },
      (error) => {
        alert("Failed");
      }
    );
}
    handleFileSelected(event){
        event.preventDefault();
        let url = 'http://localhost:5000/api/';
        this.photofilename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );
        
    fetch(url + "Constomer/SaveFile", {
      method: "POST",
      body: formData,
        })
        .then((res) => res.json())
        .then(
          (result) => {
            this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
          },
          (error) => {
            alert("Failed");
          }
        );
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
<Modal.Header clooseButton>
                <Modal.Title id="contained-modal-title-vcenter">
                     Edit Constomer
                </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>

<Row>
    <Col sm={6}>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="ConstomerId">
                <Form.Label>ConstomerId</Form.Label>
                <Form.Control type="text" name="ConstomerId" required placeholder="ConstomerId"
                disabled
                defaultValue={this.props.empid}
                />

            </Form.Group>
            <Form.Group controlId="ConstomerName">
                <Form.Label>ConstomerName</Form.Label>
                <Form.Control type="text" name="ConstomerName" required 
                defaultValue={this.props.empname}
                placeholder="ConstomerName"
                
                />
            </Form.Group>


            <Form.Group controlId="ConstomerLastName">
                <Form.Label>ConstomerLastName</Form.Label>
                <Form.Control type="text" name="ConstomerLastName" required
                defaultValue={this.props.emplastname}
                placeholder="ConstomerLastName"/>
            </Form.Group>
            
            <Form.Group controlId="Eventi">
                            <Form.Label>Eventi</Form.Label>
                            <Form.Control as="select" defaultValue={this.props.depni}>
                                {this.state.deps.map(dep=>
                                    <option key ={dep.EventiId}>{dep.EventiName}</option> )}
                            </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="DateOfEvent">
                            <Form.Label>DateOfEvent</Form.Label>
                            <Form.Control 
                            type="date"
                            name="DateOfEvent"
                            required
                            placeholder ="DateOfEvent"
                            defaultValue={this.props.doe}
                            />
                        </Form.Group>

            
            <Form.Group>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
            </Form.Group>

        </Form >
    </Col>
    <Col sm ={6}>
    <Image width="200px" height="200px" src={"http://localhost:5000/WebApplication4/Photos/anonymous.jpeg"}/>
                    <input onChange={this.handleFileSelected} type="File"/>
    
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