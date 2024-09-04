import { useEffect, useState } from "react";
import Input from "../../../../recicle/Inputs";
import { validateForm1 } from "../../../../recicle/validate";

const FormOne = ({ setForm1, resetForm , formData, setFormData }) => {

  useEffect(() => {
    if (resetForm) {
      setFormData({
        dni: "",
        name: "",
        email: "",
        business: "",
        phoneCode: "+51",
        phoneNumber: "",
        password: "",
      });
    }
  }, [resetForm]);
  const form1 = validateForm1(formData);
  useEffect(() => {
    if (Object.keys(form1).length === 0) {
      setForm1(formData);
    }
  }, [formData]);

  const handleChangeCode = (e) => {
    setFormData((prevData) => {
      return { ...prevData, phoneCode: e };
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "business") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.toUpperCase(),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form className="flex flex-wrap space py-8 p-12 items-center w-full">
      <Input
        label="DNI"
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={8}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
        name="dni"
        value={formData.dni}
        onChange={handleChange}
      />
      <Input
        label="Nombre y Apellido"
        type="text"
        name="name"
        pattern="[a-zA-Z\s]*"
        onKeyPress={(e) => {
          if (!/^[a-zA-Z\s]*$/.test(e.key)) {
            e.preventDefault();
          }
        }}
        width={"w-80 ml-8"}
        onChange={handleChange}
        value={formData.name}
      />
      <Input
        label="Dirección de correo electrónico"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Empresa"
        type="text"
        name="business"
        value={formData.business}
        onChange={handleChange}
      />
      <div className="flex ml-8 ">
        <Input
          label="Pais"
          type="phoneCode"
          name="phoneCode"
          width="w-32"
          value={formData.phoneCode}
          onChange={handleChangeCode}
        />
        <Input
          label="Telefono"
          type="text"
          width="mx-2"
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Contraseña"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </form>
  );
};

export default FormOne;
