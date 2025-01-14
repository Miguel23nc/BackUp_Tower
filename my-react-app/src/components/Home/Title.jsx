import { useParams } from "react-router";
import ProtectedComponent from "./ProtectedComponent";
import Colaboradores from "../../Modules/RecursosHumanos/Colaboradores/Colaboradores";
import Clientes from "../../Modules/Comercial/Clientes/Clientes";
import Cotizacion from "../../Modules/Comercial/Cotización/Cotización";
import Empresas from "../../Modules/RecursosHumanos/Empresas/Empresas";
import Contratos from "../../Modules/RecursosHumanos/Contratos/Contratos";
import PlantillaContrato from "../../Modules/RecursosHumanos/PlantillaContrato/PlantillasContrato";
import AsistenciaColaborador from "../../Modules/RecursosHumanos/Asistencia/Colaborador/AsistenciaColaborador";
import AsistenciaVisitante from "../../Modules/RecursosHumanos/Asistencia/Visitante/AsistenciaVisitante";
import BoletaDePagos from "../../Modules/RecursosHumanos/BoletaDePagos/BoletaDePagos";

const componentMap = {
  colaboradores: Colaboradores,
  clientes: Clientes,
  cotización: Cotizacion,
  empresas: Empresas,
  contratos: Contratos,
  "plantillas contrato": PlantillaContrato,
  "asistencia colaboradores": AsistenciaColaborador,
  "asistencia visitantes": AsistenciaVisitante,
  "boleta de pagos": BoletaDePagos,
  cotizacion: Cotizacion,
};

const Title = () => {
  const { title } = useParams();

  const ComponentToRender = componentMap[title];
  return (
    <div className="pl-20 overflow-auto w-full">
      <ProtectedComponent allowedSubmodules={[title]}>
        {ComponentToRender ? <ComponentToRender /> : "Submódulo no encontrado"}
      </ProtectedComponent>
    </div>
  );
};

export default Title;
