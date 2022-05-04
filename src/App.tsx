import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row ,Col,Navbar,Nav, Button, Spinner, Accordion,NavItem} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator ,AmplifySignOut} from '@aws-amplify/ui-react';
import {Person} from './models/person' ;
import {ClientDataTable} from "./components/ClientDataTable";
import IClient from "./models/IClient";
import {getAllClients} from "./services/ClientService" ;
import IEvent from "./models/IEvent";
import  {selectedUsers, allUsers} from './test-data/testdata' ;
import {getAllEvents} from "./services/EventService";
Amplify.configure(awsconfig);


type AppProps = {
    clients: IClient[]
};


function App({}) {

    const [currentUser, setCurrentUser] = useState("") ;
    const [clients, setClients] = useState<IClient[]>([]);
    const [events, setEvents]   = useState<IEvent[]>([]);
    const appProps : AppProps ={clients:[]} ;


   useEffect ( ( ) => {

       checkUser();
       loadClients() ;
       loadEvents()  ;

   }, []) ;

   const checkUser = () => {
        Auth.currentAuthenticatedUser().then( user => setCurrentUser(user.username)) ;
    }

    const loadClients = () => {
        getAllClients()
            .then( (res) => res)
            .then( res => setClients(res));
    }

    const loadEvents = () => {
       getAllEvents()
           .then(res => setEvents(res))
    }


  
  return (
    <Container fluid className='fullsize'>
        <Navbar sticky="top" bg="primary" variant="dark" className="navbar-default">
        <Navbar.Brand href="#home">Vienna-Connect Comapnies</Navbar.Brand>
    <Container>
   
      <Nav className="ms-auto">
        <Nav.Link href="#home">Kunden</Nav.Link>
        <Nav.Link href="#anbieter">Anbieter</Nav.Link>
        <Nav.Link href="#kontakte">Kontakte</Nav.Link>
        <Nav.Link href="#preise">Preise</Nav.Link>
        <Nav.Link href="#home">Kunden</Nav.Link>
        <Nav.Link href="#anbieter">Anbieter</Nav.Link>
        <Nav.Link href="#kontakte">Kontakte</Nav.Link>
        <Nav.Link href="#preise">Preise</Nav.Link>

          <Nav className="ms-1">
              <NavItem >
                  <Nav.Link  className="ms-auto" href="#account">
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

            <div  className=".leftSide">

                <ClientDataTable clients={clients}  > </ClientDataTable>

            </div>
        </Col>
       
       
        <Col lg={6} md={6} xs={12} >
          <Row>
          <div className="rightSideup" title="Your Bank">
              <span> <h3> Buchen </h3></span>
              <Accordion flush>

          <Accordion.Item eventKey="0">
              <Accordion.Header>Offene Termine</Accordion.Header>
              <Accordion.Body>
                  { events && events.map( (event :IEvent ) =>   <div className="box done" draggable>
                      <ul  className="a">
                          <li> {event.id} </li>
                          <li>{event.title} </li>
                          <li>{event.description}    </li>
                          <li>{event.booking_date} </li>
                          <li>{event.branche} </li>
                          <li>{event.action_time} </li>
                          <li>{event.branche} </li>
                          <li>{event.client.lastName} </li>
                          <li>{event.company.companyName} </li>

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
      </div>
          </Row>

          <Row>
          <div className="rightTaskLine" >
          <span> <h3> Pipeline </h3></span>
          <Accordion>
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