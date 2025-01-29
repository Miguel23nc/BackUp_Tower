import ReadOrCreate from "../../../../components/Principal/Principal";
import ListAColaborador from "./List/List";
import RegisterAsistenciaColaborador from "./Register/Register";
import ReporteAsistenciaColaborador from "./Reporte/Resport";

const AsistenciaColaborador = () => {
  return (
    <ReadOrCreate
      ItemReporte={ReporteAsistenciaColaborador}
      ItemList={ListAColaborador}
      ItemRegister={RegisterAsistenciaColaborador}
      submodule="ASISTENCIA"
    />
  );
};

export default AsistenciaColaborador;
