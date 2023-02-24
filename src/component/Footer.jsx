import React from 'react';
import { FcAddressBook, FcHome, FcPhone } from "react-icons/fc";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <section className="footerContainer__section1">
        <div className="footerContainer__section1__logo">
          <h3 className="footerContainer__section1__logo__title">SIT</h3>
          <p className="footerContainer__section1__logo__subtitle">Servicio Integrador Tecnológico</p>
        </div>
        <div className="footerContainer__section1__info">
          <p><FcHome /> C/ El Caminito a ninguna parte, 8 
          <br /> 29345 Madrid
          <br /><FcAddressBook/>info@sit.com  <br /><FcPhone /> +34 91 123 45 67 </p>
        </div>
      </section>

      <section className="footerContainer__section2">
        <div className="footerContainer__section2__icons">
          <a href="https://es.facebook.com" target="_blank" rel="noopener noreferrer" className="footerContainer__section2__icon">
            <AiOutlineFacebook className='iconSocial'/>
          </a>
          <a href="https://twitter.com/?lang=ES" target="_blank" rel="noopener noreferrer" className="footerContainer__section2__icon">
            <AiOutlineTwitter className='iconSocial'/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footerContainer__section2__icon">
            <AiOutlineInstagram className='iconSocial'/>
          </a>
          <a href="https://es.linkedin.com" target="_blank" rel="noopener noreferrer" className="footerContainer__section2__icon">
            <AiOutlineLinkedin className='iconSocial'/>
          </a>      
        </div>
      </section>

      <div className="footerContainer__section3">
        <p className="footerContainer__section3__text">SIT 2023</p>
      </div>
    </footer>
  )
}

export default Footer;

