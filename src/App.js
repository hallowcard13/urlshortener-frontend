import React from 'react';
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      urlLink: '',
      error:false,
      finalshortlink:'',
      errormessages:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleurlchange = this.handleurlchange.bind(this);
  }

  handleSubmit(){
    axios.post('http://urlshortener.test/api/createurl', {'url': this.state.urlLink}).then(res => {
      this.setState({finalshortlink:res.data.url});
    }).catch(err => {
      this.setState({errormessages:err.response.data.errors.url[0], error:true});
    });
  }

  handleurlchange(event){
    this.setState({urlLink:event.target.value})
  }

  render(){
    const finalshortlink = this.state.finalshortlink;
    const haserror = this.state.error;
    const errormessages = this.state.errormessages;
    // const errormsglist =  errormessages.map((err,ind) =>{
    // <li key={ind.toString()}>{err}</li>
    // });
    return (
      <Container>
        <Row>
          <Col>
           <Form className="Main-form">
              <Row noGutters="true" className="justify-content-md-center">
                <Col xs={12} className="text-center"><h1 className="uppercase">Let's create Beautiful links</h1></Col>
                <Col xs={6}>
                  <Form.Control type="email" placeholder="Enter a url" onChange={this.handleurlchange} />
                  <Form.Text className="text-muted">
                    Example:https://test.com/this-is-an-example
                  </Form.Text>
                </Col>
                <Col xs={2}>
                <Button onClick={this.handleSubmit} variant="primary" className="Main-button-submit">
                  Create short link
                </Button>
                </Col>
                <Col xs={6} >
                  { finalshortlink.length > 1 &&
                  <Card bg="info" text="white" style={{ width: '18rem', marginTop:'20px' }}>
                    <Card.Body>
                      <Card.Text>
                      {finalshortlink}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  }
                  { haserror  &&
                  <Card bg="danger" text="white" style={{ width: '18rem', marginTop:'20px' }}>
                    <Card.Body>
                      <Card.Text>
                        {errormessages}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  }
                </Col>
              </Row>
           </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
