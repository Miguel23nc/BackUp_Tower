import jsQR from "jsqr";

export const scanQRCode = async (videoElement, onResult) => {
  if (!videoElement) {
    throw new Error("El videoElement es null o no está disponible");
  }

  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const stopCamera = () => {
      const stream = videoElement.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      canvas.remove();
    };

    let timeout = setTimeout(() => {
      stopCamera();
      throw new Error("No se encontró un código QR");
    }, 10000); // Detener después de 10 segundos si no encuentra un QR

    const scan = () => {
      if (videoElement.readyState !== videoElement.HAVE_ENOUGH_DATA) {
        requestAnimationFrame(scan);
        return;
      }

      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

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
    console.error(err);
    throw new Error(err.message);
  }
};
