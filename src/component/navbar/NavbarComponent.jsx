import React from 'react';
import './navbarComponent.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavbarComponent = () => {
  return (
    <>
      <Navbar className='navbarContainer' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <Link to='/'>
              <img src={Logo} className='logoBttNavbar' alt='Logo' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <FontAwesomeIcon icon={faBars} className='iconHamburg' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='optionsHamburg'>
            <Link to='/'><Nav href='#home'>Home</Nav></Link>
            <Link to='/FormAds'><Nav href='#publicar-anuncio'>Publicar Anuncio</Nav></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavbarComponent;