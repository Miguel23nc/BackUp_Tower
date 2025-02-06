import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import QRCodeScanner from "../Escaneo/Escaneo.jsx";
import useSendMessage from "../../../recicle/senMessage";
import PopUp from "../../../recicle/popUps";

const RegisterAsistencia = () => {
  const [scanResult, setScanResult] = useState(null); // Almacenamos el resultado del escaneo
  const [isScanning, setIsScanning] = useState(false);
  const sendMessage = useSendMessage();
  console.log("scanResult", scanResult);

  const handleScanResult = (data) => {
    setScanResult(data);
    console.log("QR Result:", data);
  };
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

  const escanear = async () => {
    console.log("Escanear");
    try {
      setIsScanning((prev) => !prev); // Cambiar el estado de escaneo
    } catch (error) {
      sendMessage(error.message, "Error");
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
        {isScanning && (
          <QRCodeScanner
            onScanResult={handleScanResult}
            onclose={setIsScanning}
          />
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
