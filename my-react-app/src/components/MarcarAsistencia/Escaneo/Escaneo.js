import jsQR from "jsqr";
import useSendMessage from "../../../recicle/senMessage";

export const scanQRCode = async (onResult) => {
  const sendMessage = useSendMessage();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });

    const video = document.createElement("video");
    video.srcObject = stream;
    video.setAttribute("playsinline", "true");
    document.body.appendChild(video);
    video.play();

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const stopCamera = () => {
      stream.getTracks().forEach((track) => track.stop());
      video.remove();
      canvas.remove();
    };

    let timeout = setTimeout(() => {
      stopCamera();
      sendMessage("No se encontró un código QR", "error");
    }, 10000); // Detener después de 10 segundos si no encuentra un QR

    const scan = () => {
      if (video.readyState !== video.HAVE_ENOUGH_DATA) {
        requestAnimationFrame(scan);
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const qrCode = jsQR(imageData.data, canvas.width, canvas.height);

      if (qrCode) {
        stopCamera();
        clearTimeout(timeout);
        if (onResult) onResult(qrCode.data);
      } else {
        requestAnimationFrame(scan);
      }
    };

    scan();
  } catch (err) {
    sendMessage("Ocurrió un error al intentar escanear el código QR", "error");
    console.error(err);
  }
};
