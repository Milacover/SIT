import React from 'react';
import './navbarComponent.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {
  return (
    <>
      <Navbar className='navbarContainer'>
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/'>
            <img
              src={Logo}
              className="logoBttNavbar"
              alt="Logo"
            />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent
