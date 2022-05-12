 import {Navbar,Nav,Container,NavDropdown, Row,Col} from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import { Container  } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap'
import{Form} from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { Button } from 'react-bootstrap'
import './ArticlesList.css';


export default function ArticlesList(){

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#deets">More details</Nav.Link>
                    <Nav.Link  href="#memes">
                        Good stuff
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <section id="hero">
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={4}>
                            <h1>Browse our courses curated with the best artists in the industry only for you.</h1>
                            <p>Gain access to a thriving community of artists when you take a course with us.</p>
                        </Col>
                        <Col lg={7}></Col>
                    </Row>
                </section>

        <Container id="gridimg" className="mt-5">
            <Row>
                <Col lg={4}>
                    <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png" alt=""></img>
                    <h3>Unboxing Content Creation</h3>
                </Col>
                <Col lg={4}>
                    <img  src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png" alt=""></img>
                    <h3>Unboxing Content Writing and Blogging</h3>
                </Col>
                <Col lg={4}>
                    <img src="https://www.unboxingart.in/wp-content/uploads/2021/09/Unboxing-Content-Writing-Blogging-Website-1-300x300.png" alt=""></img>
                    <h3>Unboxing Creative Writing (2 weeks)</h3>
                </Col>
            </Row>
        </Container>
      
        </>
    );


}