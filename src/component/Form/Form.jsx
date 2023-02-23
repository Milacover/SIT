import { useForm } from "react-hook-form";
import './form.scss'

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

        <textarea id="descripcion"  placeholder="Descripción" {...register("description", { required: true })}></textarea>
        {errors.description && <span>Debe rellenar este campo</span>}
      </fieldset>
    
      <div className="wrapper__buttons">
      <input  className="submit" id="submit" type="submit" value="ENVIAR" />
      <input className="reset" id="reset" type="reset" value="RESTABLECER" />

      </div>
    </form>
  );
}
export default MyForm;
