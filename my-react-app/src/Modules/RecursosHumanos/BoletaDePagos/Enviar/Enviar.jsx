import { useDispatch, useSelector } from "react-redux";
import CardPlegable from "../../../../recicle/Divs/CardPlegable";
import Input from "../../../../recicle/Inputs/Inputs";
import { useEffect, useMemo, useState } from "react";
import {
  getBoletaDePagos,
  getBusiness,
  setMessage,
} from "../../../../redux/actions";
import useValidation from "./validateEnviar";
import ListEnvio from "./ListEnvio";
import ButtonOk from "../../../../recicle/Buttons/Buttons";
import dayjs from "dayjs";
import { useAuth } from "../../../../context/AuthContext";
import renderDoc from "./renderDoc";
import documentoCloudinary from "../../../../api/cloudinaryDocument";
import PopUp from "../../../../recicle/popUps";

const Enviar = () => {
  const { enviarBoletasDePago } = useAuth();
  const [deshabilitar, setDeshabilitar] = useState(false);
  const [form, setForm] = useState({
    empresa: "",
    fechaBoletaDePago: "",
  });
  const dispatch = useDispatch();
  const business = useSelector((state) => state.business);
  useEffect(() => {
    if (business.length === 0) {
      dispatch(getBusiness());
    }
  }, [business]);
  const businessName = business?.map((item) => item.razonSocial);

  const { error, validateForm } = useValidation();
  const boletas = useSelector((state) => state.boletaDePagos);
  useEffect(() => {
    if (boletas?.length === 0) {
      dispatch(getBoletaDePagos());
    }
  }, [boletas]);

  const boletasFiltrado = useMemo(() => {
    return boletas?.filter(
      (item) =>
        item.colaborador.business === form.empresa &&
        item.fechaBoletaDePago ===
          dayjs(form.fechaBoletaDePago).format("MM/YYYY")
    );
  }, [boletas, form]);

  console.log("boletasFiltrado", boletasFiltrado);
  const showMessage = (message, type) => {
    dispatch(setMessage(message, type));
  };

  const enviarCorreo = async () => {
    showMessage("Enviando Correo...", "Espere");
    setDeshabilitar(true);
    try {
      const formIsValide = validateForm(form);
      if (formIsValide) {
        if (!boletasFiltrado || boletasFiltrado.length === 0) {
          showMessage("No hay boletas disponibles", "Error");
          return;
        }
        const datosBoleta = boletasFiltrado
          .filter((item) => !item.envio)
          .map(async (item) => {
            const docxTranscript = await renderDoc(item);
            const cloudinaryUrl = await documentoCloudinary(docxTranscript);
            return {
              archivoUrl: cloudinaryUrl,
              email: item.colaborador.email,
              fechaBoletaDePago: item.fechaBoletaDePago,
              empresa: item.colaborador.business,
              colaborador:
                item.colaborador.lastname + " " + item.colaborador.name,
              boletaId: item._id,
            };
          });

        const newForm = await Promise.all(datosBoleta);
        console.log("newForm", newForm);

        const response = await enviarBoletasDePago({ datosBoleta: newForm });
        if (!response)
          return showMessage("Error al generar la boleta", "Error");
        showMessage(response, "Ok");
      } else {
        showMessage("Complete los campos", "Error");
      }
    } catch (error) {
      console.log("error", error);
      showMessage(error, "Error");
    } finally {
      setDeshabilitar(false);
    }
  };

  return (
    <div>
      <PopUp disabled={deshabilitar} />
      <CardPlegable title="Datos de Envío">
        <div className="flex">
          <Input
            label="Empresa"
            options={businessName}
            type="select"
            name="empresa"
            value={form.empresa}
            setForm={setForm}
            errorOnclick={error.empresa}
          />
          <Input
            label="Fecha De Boleta"
            type="month"
            name="fechaBoletaDePago"
            value={form.fechaBoletaDePago}
            setForm={setForm}
            errorOnclick={error.fechaBoletaDePago}
          />
          <ButtonOk
            styles={" flex flex-col justify-end h-20 mx-4 py-3 "}
            onClick={enviarCorreo}
            children="Enviar a todos"
            type="ok"
          />
        </div>
      </CardPlegable>
      <CardPlegable title="Tabla de Envíos">
        <ListEnvio
          boletasFiltrado={boletasFiltrado}
          enviarCorreo={enviarCorreo}
        />
      </CardPlegable>
    </div>
  );
};

export default Enviar;
