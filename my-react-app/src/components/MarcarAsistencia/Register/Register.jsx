import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import { scanQRCode } from "../Escaneo/Escaneo";
import useSendMessage from "../../../recicle/senMessage";
import PopUp from "../../../recicle/popUps";

const RegisterAsistencia = () => {
  const [qrResult, setQrResult] = useState(null);
  const [loadingCamera, setLoadingCamera] = useState(false);
  const videoRef = useRef(null); // Ref para referenciar el video en el DOM
  const sendMessage = useSendMessage();

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  const escanear = async () => {
    console.log("Escanear");

    setLoadingCamera(true);
    try {
      if (videoRef.current) {
        await scanQRCode(videoRef.current, setQrResult); // Asegurarnos de que videoRef.current no sea null
      }
    } catch (error) {
      sendMessage(error.message, "Error");
    } finally {
      setLoadingCamera(false);
    }
  };

  useEffect(() => {
    preloadImage("/FONDO-ASISTENCIAS.webp");
  }, []);

  return (
    <div
      style={{ backgroundImage: "url(/FONDO-ASISTENCIAS.webp)" }}
      loading="lazy"
      className="h-screen bg-cover px-10 bg-center bg-no-repeat bg-fixed"
    >
      <PopUp />
      <div className="flex justify-center items-center h-full">
        {/* Video de la cámara */}
        {loadingCamera && (
          <div className="fixed z-50 w-full h-full">
            <video
              ref={videoRef}
              className="absolute w-full h-full object-cover"
              onPlay={() => console.log("Cámara iniciada")}
            />
            <div className="absolute w-full h-full bg-black opacity-50 flex justify-center items-center text-white">
              Cargando cámara...
            </div>
          </div>
        )}
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
