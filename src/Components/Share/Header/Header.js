import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsTelephone} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFacebook,AiFillTwitterSquare , AiFillLinkedin } from "react-icons/ai";
import logo from "../../../images/logo/logo.png"
import "./Header.css";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {users,logOut} = useAuth();
    return (
        <div>
            <div>
            <Navbar bg="info" variant="light" className="p-0 d-md-block d-none  border-bottom ">
                <Container  >
                        <Navbar.Brand href="#home" className="p-0 fs-6">
                                    <span><BsTelephone/> 24 hours emergency & ambulance Service: </span>
                                < span> +8801609015767</span> 
                        </Navbar.Brand>
                        <Nav className="ms-auto"  >
                            {
                                users.email? <button onClick={logOut} className="border-0 bg-light fw-bolder">Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login" id="header-login" className="py-0 px-2 fs-5 my-1">Login</Nav.Link>
                            }
                            
                            <Nav.Link href="#features" id="header-icon"   className="px-1 fs-4 p-0 text-white ms-4"> <HiOutlineMail/> </Nav.Link>
                            <Nav.Link href="#features" className="py-0 px-1 fs-4 text-white"> <AiFillFacebook/> </Nav.Link>
                            <Nav.Link href="#pricing" id="header-icon-second"  className="py-0 px-1 fs-4 text-white"><AiFillTwitterSquare/></Nav.Link>
                            <Nav.Link href="#pricing" className="py-0 px-1 fs-4 text-white"><AiFillLinkedin/></Nav.Link>
                         </Nav>
                </Container>
            </Navbar>
            </div>
            <div>
            <Navbar bg="light" className="p-0 " expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img id="logo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link as={Link} to="/home" className="fw-bolder text-start fs-4">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home" className="fw-bolder text-start fs-4">Detail</Nav.Link>
                       
                        {
                                users.email? <button onClick={logOut} className="border-0 bg-light text-start fw-bolder ps-0 fs-4 fw-bolder pt-1">Log Out</button>
                                :
                                <Nav.Link as={Link} to="/login" className="py-0 px-2 fs-5 my-1 text-start ps-0 fs-4 fw-bolder pt-1">Login</Nav.Link>
                            }
                       
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </div>
        
    );
};

export default Header;