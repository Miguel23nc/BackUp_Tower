import { useParams } from "react-router";
import ProtectedComponent from "./ProtectedComponent";
import Colaboradores from "../../Modules/RecursosHumanos/Colaboradores/Colaboradores";
import Clientes from "../../Modules/Comercial/Clientes/Clientes";

const componentMap = {
  colaboradores: Colaboradores,
  clientes: Clientes,
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
