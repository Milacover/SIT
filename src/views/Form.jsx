import { useForm } from "react-hook-form";
import Footer from "../component/Footer";
import NavbarComponent from "../component/navbar/NavbarComponent";
import './form.scss'
import { Link } from 'react-router-dom';
import { FcLeft } from "react-icons/fc";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      alert('formulario enviado');
      data.preventDefault();
    };
 
  return (

    <div>
      <NavbarComponent />
    <Link to='/'><FcLeft></FcLeft></Link>
    <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="wrapper__title">Formulario</h1>
      <fieldset className="wrapper__content">
        <input id="nombre" placeholder="Nombre:" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Debe rellenar este campo</span>}

        <input id="correo"  placeholder="Correo"  {...register("correo", { required: true })} />
        {errors.correo && <span>Debe rellenar este campo</span>}
        {
          <select className="wrapper__select" id="categoria" name="dropdown">
            <option value="">Elige la Categoria</option>
            <option value="1">Desarrollo Web</option>
            <option value="2">Ilustrador</option>
            <option value="3">Diseño Gráfico</option>
            <option value="4">Ingeniero de Software</option>
            <option value="5">Traductor</option>
          </select>
        }

        <textarea className="wrapper_description" id="descripcion"  placeholder="Descripción" {...register("description", { required: true })}></textarea>
        {errors.description && <span>Debe rellenar este campo</span>}
      </fieldset>
    
      <div className="wrapper__buttons">
      <button  className="submit" id="submit" type="submit" >Enviar </button>
      <button className="reset" id="reset" type="reset" >Restablecer</button>

      </div>
    </form>
    <Footer />
    </div>
  );
}
export default MyForm;
