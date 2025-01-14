import Input from "../../../../../recicle/Inputs/Inputs";
import InputDate from "../../../../../recicle/Inputs/tipos/InputDate";

const DatosDeAsistencia = ({ setForm, error, form }) => {
  return (
    <div className="flex flex-wrap">
      <InputDate
        label="Fecha De Asistencia"
        name="fecha"
        value={form.fecha}
        setForm={setForm}
        errorOnclick={error.fecha}
      />
      <Input
        label="Hora de Entrada"
        name="ingreso"
        value={form.ingreso}
        setForm={setForm}
        errorOnclick={error.ingreso}
      />
      <Input
        label="Hora de Salida"
        name="salida"
        value={form.salida}
        setForm={setForm}
        errorOnclick={error.salida}
      />
      <Input
        label="inicio de Almuerzo"
        name="inicioAlmuerzo"
        value={form.inicioAlmuerzo}
        setForm={setForm}
        errorOnclick={error.inicioAlmuerzo}
      />
      <Input
        label="Fin de Almuerzo"
        name="finAlmuerzo"
        value={form.finAlmuerzo}
        setForm={setForm}
        errorOnclick={error.finAlmuerzo}
      />
    </div>
  );
};

export default DatosDeAsistencia;
