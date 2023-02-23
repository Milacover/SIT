import React, { useState } from 'react';
import './home.scss';
import Navbar from '../component/navbar/NavbarComponent'
import Cards from '../component/Cards'
import ToggleButton from 'react-bootstrap/ToggleButton';

import { Form, FormControl, Button } from 'react-bootstrap';

 

import Footer from '../component/Footer';

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
    <div className='searchContainer'>
    <Form className="searchForm">
      <FormControl type="text" placeholder="Buscar anuncios" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
    </div>
    <div className='titleAds'>
      <span>Todos los Anuncios</span>
    
    </div>


    

    <Cards/>
<div className='containerBtt'>

    <ToggleButton
        className="boutline-primary"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
    >
        Publicar Anuncio

      </ToggleButton>
      </div>

    
    
    <Footer/>


    </>
  )
}

export default () => {
  const [checked, setChecked] = useState(false);
  return <Home checked={checked} setChecked={setChecked} />;
};
