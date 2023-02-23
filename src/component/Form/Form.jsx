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
    <form class="wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h1 class="wrapper__title">Formulario</h1>
      <fieldset class="wrapper__content">
        <input id="nombre" placeholder="Nombre:" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Debe rellenar este campo</span>}

        <input id="correo"  placeholder="Correo"  {...register("correo", { required: true })} />
        {errors.correo && <span>Debe rellenar este campo</span>}
        {
          <select class="wrapper__select" id="categoria" name="dropdown">
            <option value="">Elige la Categoria</option>
            <option value="1">Desarrollo Web</option>
            <option value="2">Ilustrador</option>
            <option value="3">Diseño Gráfico</option>
            <option value="4">Ingeniero de Software</option>
            <option value="5">Traductor</option>
          </select>
        }

        <input id="descripcion" placeholder="Descripción" {...register("description", { required: true })}/>
        {errors.description && <span>Debe rellenar este campo</span>}
      </fieldset>
    
      <div class="wrapper__buttons">
      <input  class="submit" id="submit" type="submit" value="ENVIAR" />
      <input class="reset" id="reset" type="reset" value="RESTABLECER" />

      </div>
    </form>
  );
}
export default MyForm;
