import { useState } from "react";
import Card from "../Card";
import { scanQRCode } from "../Escaneo/Escaneo";
import useSendMessage from "../../../recicle/senMessage";
import PopUp from "../../../recicle/popUps";

const RegisterAsistencia = () => {
  const [qrResult, setQrResult] = useState(null);
  const sendMessage = useSendMessage();
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };
  const escanear = async () => {
    try {
      await scanQRCode(setQrResult);
    } catch (error) {
      sendMessage(error.message, "Error");
    }
  };
  console.log("qrResult", qrResult);

  preloadImage("/FONDO-ASISTENCIAS.webp");
  self.addEventListener("fetch", (event) => {
    if (event.request.destination === "image") {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).then((fetchedResponse) => {
              const cache = caches.open("image-cache");
              cache.put(event.request, fetchedResponse.clone());
              return fetchedResponse;
            })
          );
        })
      );
    }
  });

  return (
    <div
      style={{ backgroundImage: "url(/FONDO-ASISTENCIAS.webp)" }}
      loading="lazy"
      className=" h-screen bg-cover px-10 bg-center bg-no-repeat bg-fixed "
    >
      <PopUp />
      <div className=" flex justify-center items-center h-full ">
        <Card
          titulo="HORA DE INGRESO"
          imagen="/HORA DE INGRESO.webp"
          onclick={() => escanear()}
        />
        <Card
          titulo="INICIO ALMUERZO"
          onclick={() => escanear()}
          imagen="/INICIO ALMUERZO.webp"
        />
        <Card
          titulo="FIN ALMUERZO"
          onclick={() => escanear()}
          imagen="/FIN ALMUERZO.webp"
        />
        <Card
          titulo="HORA DE SALIDA"
          onclick={() => escanear()}
          imagen="/HORA DE SALIDA.webp"
        />
      </div>
    </div>
  );
};

export default RegisterAsistencia;
