import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import History from './History'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const routing = (
    <Router>
      
      <div>
      <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">URL Shortener</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            </Nav>
      </Navbar>
        <Route exact path="/" component={App} />
        <Route path="/history" component={History} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
