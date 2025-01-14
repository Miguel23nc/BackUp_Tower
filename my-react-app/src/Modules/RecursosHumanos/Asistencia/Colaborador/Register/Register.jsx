import { useState } from "react";
import Register from "../../../../../components/Principal/Register/Register";
import CardPlegable from "../../../../../recicle/Divs/CardPlegable";
import DatosDeAsistencia from "./Asistencia";
import DatoDeColaborador from "./Colaborador";
import useValidation from "../validateAsistenciaColaborador";
import { useAuth } from "../../../../../context/AuthContext";

const RegisterAsistenciaColaborador = () => {
  const { createAsistenciaColaborador } = useAuth();
  const [form, setForm] = useState({
    fecha: "",
    ingreso: "",
    salida: "",
    inicioAlmuerzo: "",
    finAlmuerzo: "",
    colaborador: "",
  });
  const { error, validateForm } = useValidation();

  const register = async () => {
    await createAsistenciaColaborador(form);
  };

  return (
    <Register registrar={register} validate={() => validateForm(form)}>
      <CardPlegable title="Datos de Asistencia">
        <DatosDeAsistencia setForm={setForm} error={error} form={form} />
      </CardPlegable>
      <CardPlegable title="Datos del Colaborador">
        <DatoDeColaborador setForm={setForm} error={error} form={form} />
      </CardPlegable>
    </Register>
  );
};

export default RegisterAsistenciaColaborador;
