import React from "react";
import './cards.scss';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

const cardsReduce=[
    {
        img: 'src/assets/firstView.svg',
        subtitle: 'Front-End Developer (React)',
        categoria:'Diseño',
        cobro:'100€/h',
    },
    {
        img: 'src/assets/secondView.svg',
        subtitle: 'Data Analist',
        categoria:'Data Science & Analytycs',
        cobro:'80€/h',
    },
    {
        img: 'src/assets/thirdView.svg',
        subtitle: 'UI/UX',
        categoria:'Diseño',
        cobro:'70€/h',
    }
]

const Cards = () =>{

    return (   

<div className="setCards">
    <Link to='/DetailedView'>
            {
               cardsReduce.map(cardsReduce => (
                <Card>
                    <img src={cardsReduce.img} className="card-img-top" alt={cardsReduce.subtitle}></img>
                        <div className="card-body">
                            <h3>{cardsReduce.subtitle}</h3>
                        </div>
                        <div className="card-footer">
                            <h4>{cardsReduce.cobro}</h4>
                            <h4>{cardsReduce.categoria}</h4>
                        </div>
                </Card>

                ))
               
            } 
    </Link>      
</div>

 )
}
export default Cards