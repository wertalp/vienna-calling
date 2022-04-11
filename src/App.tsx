import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row ,Col,Navbar,Nav, Button, Spinner, Accordion,NavItem} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator ,AmplifySignOut} from '@aws-amplify/ui-react';
import {Person} from './models/person' ;
Amplify.configure(awsconfig);


function App({}) {

  const [currentUser, setCurrentUser] = useState("") ;

  let selectedUsers : Person[] =
                         [{firstName: "Patrick",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date() }, 
  {firstName: "Steffie",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() }] ;
  let users : Person[] = [{firstName: "Patrick",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date() }, 
                          {firstName: "Steffie",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Helge",lastName:"Folkmann" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Florian",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Anabelle",lastName:"Suisse", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Florina",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Margarita",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Hanno",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Patrick",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date() }, 
                          {firstName: "Steffie",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Helge",lastName:"Folkmann" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Florian",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Anabelle",lastName:"Suisse", mobileNr:"078 2660060", city:"Bern", activated: new Date() },
                          {firstName: "Florina",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date()},
                          {firstName: "Margarita",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date()}
                         ] ;



   useEffect ( ( ) => {
     selectedUsers =   [{firstName: "Patrick",lastName:"Wertal" , mobileNr:"078 2660060", city:"Bern", activated: new Date() }, 
                           {firstName: "Steffie",lastName:"Folkmann", mobileNr:"078 2660060", city:"Bern", activated: new Date() }];

       checkUser();

   }, []) ;

   const checkUser = () => {
        Auth.currentAuthenticatedUser().then( user => setCurrentUser(user.username)) ;
    }


  
  return (
    <Container fluid className='fullsize'>
        <Navbar sticky="top" bg="primary" variant="light">
    <Container>
    <Navbar.Brand href="#home">Vienna-Connect Comapnies</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Kunden</Nav.Link>
        <Nav.Link href="#anbieter">Anbieter</Nav.Link>
        <Nav.Link href="#kontakte">Kontakte</Nav.Link>
        <Nav.Link href="#preise">Preise</Nav.Link>

          <Nav className="ml-auto">
              <NavItem >
                  <Nav.Link href="#account">
                      <Button  size="sm">
                          <AmplifySignOut></AmplifySignOut></Button>
                  </Nav.Link>
              </NavItem>
              <NavItem >
                  <Nav.Link href="#account">
                      <Button className="float-end" variant="outline-info" size="sm"> {currentUser} </Button>
                  </Nav.Link>
              </NavItem>

          </Nav>

      </Nav>
    </Container>
  </Navbar>
      <Row justify-content-center h-40>
        <Col lg={6} md={6} xs={12}>
            <div  className="leftSide"> 
            <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Steffie</td>
                <td>Folkmann</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Helge</td>
                <td>Fokmann</td>
                <td>@fancy</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Florian</td>
                <td>the Folki</td>
                <td>@vienna</td>
              </tr>
            </tbody>
          </table>
            { users && users.map( (user :Person ) =>   <div> {user.lastName}</div>  )}
            </div>
        </Col>
       
       
        <Col lg={6} md={6} xs={12} >
          <Row>
          <div className="rightSideup" title="Your Bank">
              <span> <h3> Buchen </h3></span>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>Termine buchen</Accordion.Header>
                      <Accordion.Body>
        { users && users.map( (user :Person ) =>   <div className="box open" draggable> 
        <ul  className="a">
          <li> {user.firstName} </li>
          <li>{user.lastName} </li>
          <li>{user.city}    </li>
          <li>{user.mobileNr} </li>

        </ul>
        <Button  variant="outline-info" className="float-end"   size="sm">BOOK</Button>
        </div>  )}
                      </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                      <Accordion.Header>Termine finished</Accordion.Header>
                      <Accordion.Body>
                          <span> <h3> fertige Termine</h3></span>
                          { users && users.map( (user :Person ) =>   <div className="box done" draggable>
                              <ul  className="a">
                                  <li> {user.firstName} </li>
                                  <li>{user.lastName} </li>
                                  <li>{user.city}    </li>
                                  <li>{user.mobileNr} </li>
                              </ul>
                              <Button variant="outline-info" size="sm">BOOK</Button>
                          </div>  )}
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>

      </div>


          </Row>
          <Row>
          <div className="rightSidedown" >

        { users && users.map( (user :Person ) =>   <div className="box done" draggable> 
        <ul  className="a">
          <li> {user.firstName} </li>
          <li>{user.lastName} </li>
          <li>{user.city}    </li>
          <li>{user.mobileNr} </li>
        </ul>
        <Button variant="outline-info" size="sm">BOOK</Button>
        </div>  )}

      </div>
          </Row>

          <Row>
          <div className="rightTaskLine" >
          <span> <h3> Pipeline </h3></span>
          <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Termine buchen</Accordion.Header>
    <Accordion.Body>
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    { selectedUsers && selectedUsers.map( (user :Person ) =>   <div className="box selected" draggable> 
        <ul  className="a">
          <li> {user.firstName} </li>
          <li>{user.lastName} </li>
          <li>{user.city}    </li>
          <li>{user.mobileNr} </li>
          </ul>
        <Button variant="outline-info" size="sm">BOOK</Button>
        </div>  )}

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Termine Absagegen</Accordion.Header>
    <Accordion.Body>
    { selectedUsers && selectedUsers.map( (user :Person ) =>   <div className="box abandonned" draggable> 
        <ul  className="a">
          <li> {user.firstName} </li>
          <li>{user.lastName} </li>
          <li>{user.city}    </li>
          <li>{user.mobileNr} </li>
          </ul>
        <Button variant="outline-info" size="sm">BOOK</Button>
        </div>  )}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

      </div>
          </Row>
    </Col>
     </Row>
        <footer className="fixed-bottom bg-dark text-center text-white">
            <div className="text-capitalize">
                <p>Folkmann Wertal Solutions in 2022 for Vienna Location @helge.patrick.te.me</p>
            </div>
        </footer>

    </Container>


  );
}

export default withAuthenticator(App);