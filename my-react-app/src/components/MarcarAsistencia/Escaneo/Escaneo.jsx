import { useState, useRef, useEffect } from "react";
import jsQR from "jsqr";
import useSendMessage from "../../../recicle/senMessage";

const QRCodeScanner = ({ onScanResult, onclose }) => {
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de la cámara
  const videoRef = useRef(null); // Referencia al video de la cámara
  const canvasRef = useRef(null); // Referencia al canvas para analizar el QR
  const [isScanning, setIsScanning] = useState(false);
  const sendMessage = useSendMessage();
  // Iniciar la cámara
  const startCamera = async () => {
    try {
      setLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // Cámara frontal
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true");
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error al acceder a la cámara:", err);
      sendMessage(err.message, "Error");
    }
  };

  // Función para escanear el QR
  const scanQRCode = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const video = videoRef.current;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, canvas.width, canvas.height);

        if (qrCode) {
          onScanResult(qrCode.data); // Llamar a la función onScanResult cuando se escanee un QR
          stopCamera(); // Detener la cámara después de escanear
        }
      }
    }
  };

  // Detener la cámara
  const stopCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
    setIsScanning(false);
  };

  // Activar el escaneo cuando el video esté listo
  useEffect(() => {
    if (isScanning) {
      startCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isScanning]);

  // Reintentar el escaneo cada 100ms
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(scanQRCode, 100); // Reintentar cada 100ms
      return () => clearInterval(interval); // Limpiar el intervalo cuando se detenga el escaneo
    }
  }, [isScanning]);

  return (
    <div className="absolute w-full h-full bg-black opacity-50 flex justify-center items-center text-white z-10">
      <button onClick={() => onclose(false)}>X</button>
      {loading && <div>Loading camera...</div>}
      <div>
        <video
          ref={videoRef}
          style={{ width: "100%", height: "auto" }}
          onPlay={() => setLoading(false)} // Cambiar el estado cuando el video empieza
        />
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default QRCodeScanner;
