import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FcAddressBook, FcHome, FcPhone } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
    
        <footer className="container text-center text-sm-center bg-light ">
  
            <section style={{backgroundColor: "#5b77a6"}}  
            className="row mt-12 d-flex justify-content-center justify-content-sm-between p-4 border-bottom">
    
                <div  className="col-12 mx-auto mb-md-0 mb-4">
                    <a href="https://es.facebook.com" target="_blank" className="p-4">
                    <img src="./src/assets/facebook.svg" alt="Facebook" width={20}/>
                    </a>
                    <a href="https://twitter.com/?lang=ES" target="_blank" className="p-4">
                    <img src="./src/assets/twitter.svg" alt="Twitter" width={20}/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className="p-4">
                    <img src="./src/assets/instagram.svg" alt="Instagram" width={20}/>
                    </a>
                    <a href="https://es.linkedin.com" target="_blank" className="p-4">
                    <img src="./src/assets/linkedin.svg" alt="Linkedin" width={20}/>
                    </a>      
                </div>
    
            </section>
  
            <section style={{backgroundColor: "#5b77a6"}}>
                <div className="container text-center text-md-center mt-5 border-bottom">      
                <div  className="row mt-12">
        
                    <div  className="col-12 mx-auto mb-md-0 mb-4">
                        <h3 className="text-uppercase fw-bold mb-4">SIT</h3>
                        <p className='fw-bold'>Servicio Integrador Tecnológico</p>
                        <p><FcHome /> C/ El Caminito a ninguna parte, 8</p>
                        <p><FcAddressBook />info@sit.com</p>         
                        <p> 29345 Madrid</p>
                        <p><FcPhone /> + 34 91 123 45 67</p>
                    </div>
        
                </div>
                </div>
            </section>

            <div style={{backgroundColor: "#5b77a6"}} className="text-center p-4">
                <AiOutlineCopyrightCircle /> SIT 2023        
            </div>
        </footer>
    
    </div>

  )
}

export default Footer
