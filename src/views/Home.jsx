import React, { useState } from 'react';
import './home.scss';
<<<<<<< HEAD
import Navbar from '../component/navbar/NavbarComponent';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Footer from '../component/Footer';

=======
import Navbar from '../component/navbar/NavbarComponent'
import Cards from '../component/Cards'
>>>>>>> card

const Home = ({checked, setChecked}) => {
  return (
    <>
    <Navbar/>
    
    <div className='aboutUsContent'>

      <div className='imageAbout'>
        <h1 className='titleAbout'>Servicio Integrador Tecnológico</h1>
        <h3 className='slogan'>Soluciones tecnológicas al alcance de un click</h3>
      </div>
    </div>
    <div className='titleAds'>
      <span>Todos los Anuncios</span>
    </div>
<<<<<<< HEAD

    <ToggleButton
        className="bttBorder"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Publicar Anuncio
      </ToggleButton>
      <Footer/>
=======
    <Cards/>
>>>>>>> card
    </>
  )
}

export default () => {
  const [checked, setChecked] = useState(false);
  return <Home checked={checked} setChecked={setChecked} />;
};
