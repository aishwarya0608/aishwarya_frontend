import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Screen() {
  return (
    <div className='full'>
      <h1>Connect With Our Digital Marketing Experts</h1> 
      <h6>Lorem ipsum dolor sit amet consectur adipisicing elit. Perspiciatis adipisci voluptate everniet quasi molestiae blanditiis unde similique,illum consequuntur recusandae </h6>
      <div className='screen'>
        <Row>
          <Col sm={6}>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <h6 style={{textAlign:'left'}}>Name</h6>
                  <Form.Control type='text' placeholder='Enter your name'/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <h6 style={{textAlign:'left'}}>Phone</h6>
                  <Form.Control type='text' placeholder='Enter phone number'/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <h6 style={{textAlign:'left'}}>Email</h6>
                  <Form.Control type='text' placeholder='Enter your Email'/>
                </Col>
              </Form.Group>
            </Form>
          </Col>

          <Col sm={6}>
          <h6 style={{textAlign:'left'}}>Message</h6>
            <div className="card custom-card">   
            <h2>.</h2>
            </div>
          </Col>
          
          <div className='buttn'>
          <ButtonGroup size="sm" className="mb-3">
          <Button>Get Started</Button>
          </ButtonGroup> 
          </div>

        </Row>
      </div>
    </div>
  );
}

export default Screen;
