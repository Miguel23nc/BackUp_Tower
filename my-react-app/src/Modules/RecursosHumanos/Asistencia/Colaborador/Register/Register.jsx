import { useEffect, useState } from "react";
import Register from "../../../../../components/Principal/Register/Register";
import CardPlegable from "../../../../../recicle/Divs/CardPlegable";
import DatosDeAsistencia from "./Asistencia";
import DatoDeColaborador from "./Colaborador";
import useValidation from "../validateAsistenciaColaborador";
import { useAuth } from "../../../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../../../redux/actions";
import useSendMessage from "../../../../../recicle/senMessage";
import Input from "../../../../../recicle/Inputs/Inputs";

const RegisterAsistenciaColaborador = () => {
  const { createAsistenciaColaborador, createAsistenciaVisitante } = useAuth();
  const [form, setForm] = useState({
    fecha: "",
    ingreso: "",
    salida: "",
    inicioAlmuerzo: "",
    finAlmuerzo: "",
    colaborador: "",
    tipoAsistencia: "",
  });
  console.log("form", form);
  
  const sendMessage = useSendMessage();
  const colaboradores = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  useEffect(() => {
    if (colaboradores.length === 0) dispatch(getEmployees());
  }, [colaboradores]);
  const { error, validateForm } = useValidation();

  const register = async () => {
    const colaboradorId = await colaboradores.find(
      (colaborador) =>
        colaborador.lastname + " " + colaborador.name === form.colaborador
    );
    if (!colaboradorId)
      return sendMessage("Colaborador no encontrado", "error");
    const newForm = {
      ...form,
      colaborador: colaboradorId._id,
    };
    delete newForm.tipoAsistencia;
    console.log("newForm", newForm);

    if (form.tipoAsistencia === "VISITANTE") {
      await createAsistenciaVisitante(newForm);
    } else {
      await createAsistenciaColaborador(newForm);
    }
  };

  return (
    <Register registrar={register} validate={() => validateForm(form)}>
      <CardPlegable title="Datos de Asistencia">
        <DatosDeAsistencia setForm={setForm} error={error} form={form} />
      </CardPlegable>
      <CardPlegable title="Datos del Colaborador">
        <div className="flex">
          <DatoDeColaborador setForm={setForm} error={error} form={form} />
          <Input
            label="Tipo de Asistencia"
            type="select"
            name="tipoAsistencia"
            value={form.tipoAsistencia}
            options={["COLABORADOR", "VISITANTE"]}
            setForm={setForm}
            errorOnclick={error.tipoAsistencia}
          />
        </div>
      </CardPlegable>
    </Register>
  );
};

export default RegisterAsistenciaColaborador;
