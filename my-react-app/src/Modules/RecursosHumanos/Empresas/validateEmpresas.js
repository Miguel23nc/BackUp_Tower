import { useState } from "react";

const useValidation = () => {
  const [error, setError] = useState({
    ruc: false,
    razonSocial: false,
    address: false,
    logo: false,
    representative: {
      name: false,
      documentType: false,
      documentNumber: false,
      signature: false,
    },
  });

  // Función de validación
  const validateForm = (formData) => {
    const newError = {
      ruc: formData.ruc === "",
      razonSocial: formData.razonSocial === "",
      address: formData.address === "",
      logo: formData.logo === "",
      representative: {
        name: formData.representative.name === "",
        documentType: formData.representative.documentType === "",
        documentNumber: formData.representative.documentNumber === "",
        signature: formData.representative.signature === "",
      },
    };

    setError(newError);

    // Verifica si el formulario es válido
    return Object.values(newError).every((field) => field === false);

    // return formIsValid;
  };

  return { error, validateForm };
};

export default useValidation;
