import React from "react";

const cardsReducidas=[
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


const Card = () =>{

    return (
   

<div>
            {
               cardsReducidas.map(cardsReducidas => (
                <div  className="card">
                    <img src={cardsReducidas.img} className="card-img-top" alt={cardsReducidas.subtitle}></img>
                        <div className="card-body">
                            <h3>{cardsReducidas.subtitle}</h3>
                        </div>
                        <div className="card-footer">
                            <h4>{cardsReducidas.cobro}</h4>
                            <h4>{cardsReducidas.categoria}</h4>
                        </div>
                </div>
       


                ))
               
            }       
    </div>




 )
}
export default Card