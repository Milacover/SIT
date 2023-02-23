import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Formulario</h1>
      <fieldset>
        <input id="nombre" placeholder="Nombre:" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Debe rellenar este campo</span>}

        <input id="correo"  placeholder="Correo"  {...register("correo", { required: true })} />
        {errors.correo && <span>Debe rellenar este campo</span>}
        {
          <select id="categoria" name="dropdown">
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

      <input id="submit" type="submit" value="ENVIAR" />
      <input id="reset" type="reset" value="RESTABLECER" />
    </form>
  );
}
export default MyForm;
