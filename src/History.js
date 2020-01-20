import React from 'react';
import {Container, Row, Col, Form, Button, Card, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

export default class History extends React.Component{
    constructor(props){
        super(props);
        this.state={
            urls:[],
            testarray:[{'number':'1'},{'number':'3'}]
        };
    }
    componentDidMount() {
        axios({
            method:'get',
            url:'http://urlshortener.test/api/showlinks',
        }).then(res =>{
            this.setState({
                urls:res.data.urls
            });
        })
    }
    render(){
        const urls = this.state.urls;
    const listurls = urls.map((url) => <ListGroup.Item key={url.id}>{url.long_url}<br/><small>{url.short_url}</small></ListGroup.Item>);
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <div className="Main-form">
                            <h1 className="uppercase">History</h1>
                            <ListGroup>
                                {listurls}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}