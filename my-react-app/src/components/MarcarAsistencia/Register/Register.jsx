import Card from "../Card";

const RegisterAsistencia = () => {
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };

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
      <div className=" flex justify-center items-center h-full ">
        <Card titulo="HORA DE INGRESO" imagen="/HORA DE INGRESO.webp" />
        <Card titulo="INICIO ALMUERZO" imagen="/INICIO ALMUERZO.webp" />
        <Card titulo="FIN ALMUERZO" imagen="/FIN ALMUERZO.webp" />
        <Card titulo="HORA DE SALIDA" imagen="/HORA DE SALIDA.webp" />
      </div>
    </div>
  );
};

export default RegisterAsistencia;
