import CardPlegable from "../../../../recicle/Divs/CardPlegable";
import InpuFiles from "../../../../recicle/Inputs/tipos/InputFile";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
import ButtonOk from "../../../../recicle/Buttons/Buttons";
import useSendMessage from "../../../../recicle/senMessage";
import PopUp from "../../../../recicle/popUps";
import { useAuth } from "../../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../../redux/actions";

const ExcelBoletas = () => {
  const [file, setFile] = useState(null);
  const { postBoletasDepago } = useAuth();
  const dispatch = useDispatch();
  const colaboradores = useSelector((state) => state.employees);
  useEffect(() => {
    if (colaboradores.length === 0) dispatch(getEmployees());
  }, [colaboradores]);
  console.log("colaboradores", colaboradores);

  const [finalice, setFinalice] = useState(false);
  console.log("file", file);
  const sendMessage = useSendMessage();

  const handleUpload = async () => {
    sendMessage("Procesando archivo... no toque nada", "Info");
    setFinalice(true);
    console.log("Subiendo archivo...");

    try {
      if (!file || !file.archivo) {
        return sendMessage("Debe seleccionar un archivo", "Error");
      }
      const reader = new FileReader();
      reader.onload = async (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0]; // Usar la primera hoja
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet); // Convertir a JSON

        const mappedData = rows.map((row) => ({
          documento: row["N° documento"],
          diasTrabajados: row["Dias Trabajados"],
          fechaBoleta: row["Fecha de Boleta"],
        }));

        for (const boleta of mappedData) {
          try {
            const findColaborador = colaboradores.find(
              (colaborador) => colaborador.documento === boleta.documento
            );
            if (!findColaborador) {
              sendMessage(
                `Colaborador con documento ${boleta.documento} no encontrado`,
                "Error"
              );
              continue; // Si no se encuentra el colaborador, saltamos a la siguiente boleta
            }

            const newForm = {
              colaborador: findColaborador._id,
              diasTrabajados: boleta.diasTrabajados,
              fechaBoletaDePago: boleta.fechaBoleta,
              diasSubsidiados: "0",
              horasTrabajadas: "192",
              diasNoLaborales: "0",
              remuneraciones: [
                {
                  datosContables: "0601",
                  monto: "0",
                },
              ],
              descuentosAlTrabajador: [
                { datosContables: "0602", monto: "0" },
                { datosContables: "0603", monto: "0" },
                { datosContables: "0604", monto: "0" },
                { datosContables: "0605", monto: "0" },
              ],
              aportacionesDelEmpleador: [
                { datosContables: "0606", monto: "0" },
                { datosContables: "0607", monto: "0" },
                { datosContables: "0608", monto: "0" },
                { datosContables: "0609", monto: "0" },
              ],
            };

            const response = await postBoletasDepago(newForm);
            console.log("Boleta registrada:", response.data);

            // Esperamos un segundo entre cada solicitud
            await new Promise((resolve) => setTimeout(resolve, 1000));
          } catch (error) {
            console.error("Error al registrar boleta:", boleta, error);
            sendMessage(`${boleta.documento} ${error}`, "Error");
            continue; // Si hay un error, saltamos a la siguiente boleta
          }
        }

        sendMessage("Todas las boletas han sido procesadas", "Success");
      };
      reader.readAsArrayBuffer(file.archivo);
    } catch (error) {
      console.error("Error al procesar el archivo:", error);
      sendMessage("Error al procesar el archivo", "Error");
    } finally {
      setFinalice(false);
    }
  };

  return (
    <div>
      <PopUp disabled={finalice} />
      <CardPlegable title="Subir Archivo Excel para Registrar Boletas de Pago">
        <div className="flex items-end">
          <InpuFiles
            label="Subir archivo"
            type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            name="archivo"
            setForm={setFile}
          />
          <ButtonOk onClick={handleUpload} disabled={finalice} type="ok">
            Subir Archivo
          </ButtonOk>
        </div>
      </CardPlegable>
    </div>
  );
};

export default ExcelBoletas;
