import { useEffect, useState } from "react";
import Card from "../Card";
import QRCodeScanner from "../Escaneo/Escaneo.jsx";
import useSendMessage from "../../../recicle/senMessage";
import PopUp from "../../../recicle/popUps";

const RegisterAsistencia = () => {
  const [scanResult, setScanResult] = useState(null); // Almacenamos el resultado del escaneo
  const [isScanning, setIsScanning] = useState(false);
  const sendMessage = useSendMessage();

  const handleScanResult = (data) => {
    setScanResult(data);
    console.log("QR Result:", data);
    setIsScanning(false); // Cierra el escáner al obtener un resultado
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/FONDO-ASISTENCIAS.webp";
  }, []);

  return (
    <div
      style={{ backgroundImage: "url(/FONDO-ASISTENCIAS.webp)" }}
      className="h-screen bg-cover px-10 bg-center bg-no-repeat bg-fixed"
    >
      <PopUp />
      <div className="flex justify-center items-center h-full">
        {isScanning && (
          <QRCodeScanner
            onScanResult={handleScanResult}
            onClose={() => setIsScanning(false)}
          />
        )}

        <Card
          titulo="HORA DE INGRESO"
          imagen="/HORA DE INGRESO.webp"
          onclick={() => setIsScanning(true)}
        />
        <Card
          titulo="INICIO ALMUERZO"
          onclick={() => setIsScanning(true)}
          imagen="/INICIO ALMUERZO.webp"
        />
        <Card
          titulo="FIN ALMUERZO"
          onclick={() => setIsScanning(true)}
          imagen="/FIN ALMUERZO.webp"
        />
        <Card
          titulo="HORA DE SALIDA"
          onclick={() => setIsScanning(true)}
          imagen="/HORA DE SALIDA.webp"
        />
      </div>
    </div>
  );
};

export default RegisterAsistencia;
