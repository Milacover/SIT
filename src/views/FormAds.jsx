import React, { useState } from 'react';
import './formAds.scss';
import Navbar from '../component/navbar/NavbarComponent';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const FormAds = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sector, setSector] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('sector', sector);
        formData.append('image', image);
        // Código para enviar los datos del formulario
      }
      
        return (
          <>
            <Navbar/>
            <div className='formContainer'>
            <Form className='formContainer' onSubmit={handleSubmit} >
              <FormGroup className='formContainer'>
                <Label for="title">Título</Label>
                <Input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </FormGroup>
              <FormGroup className='formContainer'>
                <Label for="description">Descripción</Label>
                <Input type="textarea" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
              <FormGroup className='formContainer'>
                <Label for="price">Precio</Label>
                <Input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
              </FormGroup>
              <FormGroup className='formContainer'>
                <Label for="sector">Sector</Label>
                <Input type="text" name="sector" id="sector" value={sector} onChange={(e) => setSector(e.target.value)} />
              </FormGroup>
              <FormGroup className='formContainer'>
                <Label for="image">Imagen</Label>
                <Input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />
              </FormGroup>
              <Button type="submit">Enviar</Button>
            </Form>
            </div>
          </>
        )
      }
      
      export default FormAds;