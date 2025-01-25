import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsistenciaColaboradores } from "../../../../../redux/actions";
import ListPrincipal from "../../../../../components/Principal/List/List";
import EditAsistenciaColaborador from "../Permissions/Edit";
import DeleteAsistenciaColaborador from "../Permissions/Delete";
import DetailAsistenciaColaborador from "../Permissions/Detail";
import { Column } from "primereact/column";
import CardPlegable from "../../../../../recicle/Divs/CardPlegable";
import ListAVisitante from "../../Visitante/List/List";

const ListAColaborador = ({
  permissionEdit,
  permissionDelete,
  permissionRead,
}) => {
  const Colaboradores = useSelector((state) => state.asistenciaColaboradores);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Colaboradores.length === 0) dispatch(getAsistenciaColaboradores());
  }, [dispatch]);
console.log("Colaboradores", Colaboradores);

  return (
    <div>
      <CardPlegable title="Asistencia de Colaboradores">
        <ListPrincipal
          permissionEdit={permissionEdit}
          permissionDelete={permissionDelete}
          permissionRead={permissionRead}
          DeleteItem={DeleteAsistenciaColaborador}
          EditItem={EditAsistenciaColaborador}
          DetailItem={DetailAsistenciaColaborador}
          content={Colaboradores ? Colaboradores : []}
        >
          <Column field="fecha" header="Fecha" sortable />
          <Column field="ingreso" header="Hora de Entrada" sortable />
          <Column field="salida" header="Hora de Salida" sortable />
          <Column field="inicioAlmuerzo" header="Inicio de Almuerzo" sortable />
          <Column field="finAlmuerzo" header="Fin de Almuerzo" sortable />
          <Column
            field="colaborador.lastname"
            header="Apellidos del Colaborador"
            sortable
          />
          <Column
            field="colaborador.name"
            header="Nombres del Colaborador"
            sortable
          />
        </ListPrincipal>
      </CardPlegable>
      <CardPlegable title="Asistencia de Visitantes">
        <ListAVisitante
          permissionEdit={permissionEdit}
          permissionDelete={permissionDelete}
          permissionRead={permissionRead}
        />
      </CardPlegable>
    </div>
  );
};

export default ListAColaborador;
