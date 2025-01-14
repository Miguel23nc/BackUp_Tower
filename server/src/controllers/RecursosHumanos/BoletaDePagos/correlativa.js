const BoletaDePagos = require("../../../models/RecursosHumanos/BoletaDePago");

const generarCorrelativa = async (fechaOperacion) => {
  try {
    console.log("fechaOperacion : ", fechaOperacion);

    // Extraemos el año de la fecha de operación y lo formateamos en dos dígitos (por ejemplo 24 para 2024)
    const añoActual = fechaOperacion.getFullYear().toString().slice(2); // Obtiene "24" para 2024
    const correlativaBase = `${añoActual}`; // "24"
    console.log("correlativaBase : ", correlativaBase);

    // Buscamos la última correlativa del año actual con el formato 2400001, 2400002, ...
    const ultimaCotizacion = await BoletaDePagos.findOne({
      correlativa: {
        $gte: Number(`${correlativaBase}00001`), // Busca correlativas para el año actual, por ejemplo, 2400001
        $lt: Number(`${correlativaBase}99999`), // Asegura que busque correlativas solo para el año actual, por ejemplo, hasta 2499999
      },
    })
      .sort({ correlativa: -1 }) // Ordenamos de mayor a menor para obtener la última correlativa
      .limit(1);

    console.log("ultimaCotizacion : ", ultimaCotizacion);

    let nuevoNumero;

    if (ultimaCotizacion) {
      // Extraemos el número secuencial de la última correlativa
      const ultimaCorrelativa = parseInt(
        ultimaCotizacion.correlativa.toString().slice(2), // Obtenemos solo los números después del año (por ejemplo 000001)
        10
      );
      console.log("ultimaCorrelativa : ", ultimaCorrelativa);

      // Verificar que ultimaCorrelativa es un número válido
      if (isNaN(ultimaCorrelativa)) {
        throw new Error(
          `La última correlativa no es válida: ${ultimaCotizacion.correlativa}`
        );
      }

      nuevoNumero = ultimaCorrelativa + 1; // Incrementamos el número secuencial
    } else {
      // Si no hay correlativas previas, comenzamos en 1
      nuevoNumero = 1;
    }

    // Generamos la nueva correlativa con el año y el número secuencial incrementado
    const nuevaCorrelativa = Number(
      `${correlativaBase}${nuevoNumero.toString().padStart(5, "0")}` // Asegura que el número tenga 6 dígitos
    );

    // Verificar que la nueva correlativa es un número válido
    if (isNaN(nuevaCorrelativa)) {
      throw new Error(
        `La nueva correlativa generada no es válida: ${nuevaCorrelativa}`
      );
    }

    console.log("nuevaCorrelativa : ", nuevaCorrelativa);

    return nuevaCorrelativa; // Devolvemos la nueva correlativa generada
  } catch (error) {
    console.error("Error al generar la correlativa:", error.message);
    throw error; // Lanza el error para que pueda ser manejado donde se llame esta función
  }
};

module.exports = generarCorrelativa;
