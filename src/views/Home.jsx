import React, { useState } from 'react';
import './home.scss';
import Navbar from '../component/navbar/NavbarComponent'
import Cards from '../component/Cards'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Footer from '../component/Footer';

>>>>>>>>> Temporary merge branch 2

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
<<<<<<<<< Temporary merge branch 1
    <Cards/>
=========

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
>>>>>>>>> Temporary merge branch 2
    </>
  )
}

export default () => {
  const [checked, setChecked] = useState(false);
  return <Home checked={checked} setChecked={setChecked} />;
};
