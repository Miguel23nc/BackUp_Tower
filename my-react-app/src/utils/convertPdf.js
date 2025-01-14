import axios from "../api/axios";
const convertDocxToPdf = async (docxBlob, outputFileName, showMessage) => {
  if (!(docxBlob instanceof Blob)) {
    showMessage("El archivo no es válido.");
    return;
  }

  const formData = new FormData();
  formData.append("file", docxBlob, "documentCambiante.docx");

  try {
    const response = await axios.post("/returnPdf", formData);
    console.log("Respuesta del servidor:", response);

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = `${outputFileName}.pdf`;
    link.click();
    URL.revokeObjectURL(link.href); // Liberar recursos
  } catch (error) {
    if (error.response) {
      showMessage(
        `Error del servidor: ${
          error.response.data.message || "Error desconocido"
        }`
      );
    } else {
      showMessage("Error al subir el archivo. Por favor, inténtalo de nuevo.");
    }
    console.error("Error desconocido:", error.message);
  }
};

export default convertDocxToPdf;
