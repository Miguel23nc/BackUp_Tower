import { useEffect, useState } from "react";
import Edit from "../../../../components/Principal/Permissions/Edit";
import RegisterBoletaDePagos from "../Register/Register";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoletaDePagos,
  getEmployees,
  setMessage,
} from "../../../../redux/actions";
import { useAuth } from "../../../../context/AuthContext";
import { deepDiff } from "../../../validateEdit";
import dayjs from "dayjs";

const EditBoletaDePagos = ({ setShowEdit, selected }) => {
  const dispatch = useDispatch();
  const colaboradores = useSelector((state) => state.employees);

  useEffect(() => {
    if (colaboradores.length === 0) {
      dispatch(getEmployees());
    }
  }, [dispatch, colaboradores.length]);

  const { updateBoletasDePago } = useAuth();
  const colaboradorName = selected
    ? `${selected?.colaborador?.lastname} ${selected?.colaborador?.name}`
    : "";

  const [form, setForm] = useState(() => {
    if (!selected) return {};
    return {
      ...selected,
      colaborador: colaboradorName,
      fechaBoletaDePago: selected?.fechaBoletaDePago
        ?.split("/")
        .reverse()
        .join("-"),
    };
  });

  console.log("form", form);
  const [formEdit, setFormEdit] = useState({});
  console.log("formEdit", formEdit);

  const changes = deepDiff(form, formEdit);
  console.log("changes", changes);

  const upDate = async () => {
    try {
      if (Object.keys(changes)?.length === 0) {
        dispatch(setMessage("No hay cambios", "Error"));
        return;
      }

      const colaboradorId = colaboradores.find(
        (colaborador) =>
          `${colaborador?.lastname} ${colaborador?.name}` === form?.colaborador
      );

      const newForm = {
        _id: form._id,
        ...changes,
        fechaBoletaDePago: dayjs(changes.fechaBoletaDePago)?.format("MM/YYYY"),
        ...(colaboradorId ? { colaborador: colaboradorId._id } : {}),
      };

      console.log("form apunto de enviar: ", newForm);
      const response = await updateBoletasDePago(newForm);
      if (response?.success) {
        dispatch(getBoletaDePagos());
      } else {
        console.log("Error al actualizar");
      }
    } catch (error) {
      console.log("error", error);
      dispatch(setMessage(error.message || "Error desconocido", "Error"));
    }
  };

  return (
    <Edit setShowEdit={setShowEdit} upDate={upDate}>
      <RegisterBoletaDePagos
        formInitial={form}
        descuentoInitial={form?.descuentosAlTrabajador}
        aporteinitial={form?.aportacionesDelEmpleador}
        setFormEdit={setFormEdit}
      />
    </Edit>
  );
};

export default EditBoletaDePagos;
