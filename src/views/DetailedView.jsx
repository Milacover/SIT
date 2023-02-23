import React from 'react';
import './detailedView.scss';
import Navbar from '../component/navbar/NavbarComponent';

const vistaDetallada =[
    {
        img: 'src/assets/firstView.svg',
        subtitle: 'Front-End Developer (React)',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cumque ipsam obcaecati veniam doloribus molestias aperiam animi, numquam sint ullam explicabo eaque amet autem non ratione assumenda quis voluptatum recusandae!',
        categoria:'Diseño',
        cobro:'100€/h',
    },
    {
        img: 'src/assets/secondView.svg',
        subtitle: 'Data Analist',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cumque ipsam obcaecati veniam doloribus molestias aperiam animi, numquam sint ullam explicabo eaque amet autem non ratione assumenda quis voluptatum recusandae!',
        categoria:'Data Science & Analytycs',
        cobro:'80€/h',
    },
    {
        img: 'src/assets/thirdView.svg',
        subtitle: 'UI/UX',
        text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cumque ipsam obcaecati veniam doloribus molestias aperiam animi, numquam sint ullam explicabo eaque amet autem non ratione assumenda quis voluptatum recusandae!',
        categoria:'Diseño',
        cobro:'70€/h',
    }
]

function DetailedView() {
  return (

    <>
    <Navbar/>
    </>
  )
}

    <div>
            <a href="home.jsx">Atras</a>
            { 
                vistaDetallada.map(vistaDetallada=> (
                <div  className="card">
                    <img src={vistaDetallada.img} className="card-img-top" alt={vistaDetallada.subtitle}></img>
                        <div className="card-body">
                            <h3>{vistaDetallada.subtitle}</h3>
                            <p className="card-text">{vistaDetallada.text}</p>
                        </div>
                        <div className="card-footer">
                            <h4>{vistaDetallada.cobro}</h4>
                            <h4>{vistaDetallada.categoria}</h4>
                        </div>
                </div>
        

                ))
                
            }
        
        <button><a href="">Contactar con el anunciante</a></button>
        
    </div>
  



export default DetailedView