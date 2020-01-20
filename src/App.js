import React from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
// import logo from './logo.svg';
 import './App.css';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { UrlLink: 'Short Url Here' };
  }
  render(){
    return (
      <Container>
        <Row>
          <Col>
           <Form className="Main-form">
              <Row noGutters="true" className="justify-content-md-center">
                <Col xs={12} className="text-center"><h1 className="uppercase">Let's create Beautiful links</h1></Col>
                <Col xs={6}>
                  <Form.Control type="email" placeholder="Enter a url" />
                  <Form.Text className="text-muted">
                    Example:https://test.com/this-is-an-example
                  </Form.Text>
                </Col>
                <Col xs={2}>
                <Button variant="primary" type="submit" className="Main-button-submit">
                  Create short link
                </Button>
                </Col>
                <Col xs={6}>
                  <Card bg="info" text="white" style={{ width: '18rem', marginTop:'20px' }}>

                  </Card>
                </Col>
              </Row>
           </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
