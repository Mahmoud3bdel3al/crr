import React, {Component} from 'react';
import {Form,FormGroup,FormLabel,FormControl,Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './EditProfile.css';

export default class EditProfile extends Component {



render(){

  return(
    <div className="first">
      <h2 className ="top">Edit Profile</h2>
    <div className="form">
   <Form>
   <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      First Name
    </Form.Label>
    <Col sm="4">
      <Form.Control type="Text" placeholder="Enter First name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Second Name
    </Form.Label>
    <Col sm="4">
      <Form.Control type="Text" placeholder="Enter Second name" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="4">
      <Form.Control type="Email" placeholder="Enter email" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Mobile Number
    </Form.Label>
    <Col sm="4">
      <Form.Control type="tel" placeholder="Enter Mobile number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="4">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     Confirm Password
    </Form.Label>
    <Col sm="4">
      <Form.Control type="password" placeholder="Confirm Password" />
    </Col>
  </Form.Group>
  <div >
  <Button className="submit" variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
    
   

      

       
    </div>
    </div>
        )
    }
}

