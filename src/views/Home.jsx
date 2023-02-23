import React from 'react';
import './home.scss';
import Navbar from '../component/navbar/NavbarComponent'
import Cards from '../component/Cards'

const Home = () => {
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
    <Cards/>
    </>
  )
}

export default Home
