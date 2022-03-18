import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row ,Col,Navbar,Nav} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);


function App() {

  let users : string[] = ["Patrick Wertal","Helge Folkmann"] ;



   useEffect ( ( ) => {
    users =  ["Patrick Wertal","Helge Folkmann"] ;

   },[])

   

  return (
    <Container fluid className='fullsize'>
        <Navbar sticky="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Vienna Connect</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Kunden</Nav.Link>
      <Nav.Link href="#anbieter">Anbieter</Nav.Link>
      <Nav.Link href="#kontakte">Konatkte</Nav.Link>
      <Nav.Link href="#preise">Preise</Nav.Link>
      <Nav.Link href="#account">Account</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        <Row>
        <Col lg={6} md={6} xs={12}>
          { users && users.map( (user :string ) =>   <div style={{ background: "red" }}> {user}</div>  )}
        </Col>
        <Col lg={6} md={6} xs={12}>
          <div style={{ background: "blue" }}>BERN</div>
        </Col>
      </Row>
    </Container>

  );
}

export default withAuthenticator(App);