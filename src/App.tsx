import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row ,Col,Navbar,Nav} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator ,AmplifySignOut} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);


function App({}) {

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
        <Row justify-content-center h-100>
        <Col lg={6} md={6} xs={12}>
          <div  className="leftSide"> 
          { users && users.map( (user :string ) =>   <div style={{ background: "#ff9900" }}> {user}</div>  )}
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} >
        <div className="rightSide" ></div>
        </Col>
      </Row>
      <div className="footer">
      <AmplifySignOut></AmplifySignOut>
    </div>
     
    </Container>

  );
}

export default withAuthenticator(App);