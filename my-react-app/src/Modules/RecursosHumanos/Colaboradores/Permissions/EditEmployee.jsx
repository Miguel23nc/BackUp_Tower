import { useState } from "react";
import { useDispatch } from "react-redux";
import useref from "../../../../recicle/useRef";
import { useAuth } from "../../../../context/AuthContext";
import { getEmployees } from "../../../../redux/actions";
import Input from "../../../../recicle/Inputs";
import EditPermissions from "../List/EditPermissions";
import ButtonOk from "../../../../recicle/Buttons";

const EditEmployee = (props) => {
  const { setShowEdit, employee } = props;
  const { updateEmployee } = useAuth();
  const ref = useref(setShowEdit);
  const dispatch = useDispatch();
  const [edition, setEdition] = useState({
    ...employee,
    phoneCode: "+51",
    password: "",
  });
  const handleChangeCode = (e) => {
    setEdition((prevData) => {
      return { ...prevData, phoneCode: e };
    });
  };
  const handleEdition = (e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "business") {
      setEdition((prevData) => ({
        ...prevData,
        [name]: value.toUpperCase(),
      }));
    } else {
      setEdition((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const getNonMatchingProperties = (obj1, obj2) => {
    return Object.fromEntries(
      Object.entries(obj1).filter(([key, value]) => obj2[key] !== value)
    );
  };

  const nonMatchingProperties = {
    ...getNonMatchingProperties(edition, employee),
    _id: edition._id,
    modules: edition.modules,
  };

  const upDate = async () => {
    try {
      const response = await updateEmployee(nonMatchingProperties);
      dispatch(getEmployees());
      console.log("Exito", response);
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };

  return (
    <div
      ref={ref}
      className={`w-[70%]  h-[80%] pt-6 bg-white flex flex-col justify-center
         border-stone-500 border shadow-lg fixed top-20 z-40 rounded-xl`}
    >
      <div className="flex overflow-y-auto overflow-x-hidden  content-center mt-4 flex-wrap ml-10 mx-6 h-[80%] ">
        <div className="flex  content-center flex-wrap">
          <Input
            id="name"
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
            onChange={handleEdition}
            value={edition.name}
          />
          <Input
            id="dni"
            name="dni"
            label="DNI"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={8}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={handleEdition}
            value={edition.dni}
          />
          <Input
            name="business"
            id="business"
            label="Empresa"
            onChange={handleEdition}
            value={edition.business}
          />
          <Input
            id="email"
            name="email"
            label="Correo Electrónico"
            onChange={handleEdition}
            value={edition.email}
          />
          <Input
            name="phoneCode"
            id="phoneCode"
            width="w-32 ml-8"
            label="Pais"
            onChange={handleChangeCode}
            value={edition.phoneCode}
          />
          <Input
            label="Telefono"
            type="text"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            name="phoneNumber"
            value={edition.phoneNumber}
            onChange={handleEdition}
          />
          <Input
            id="password"
            name="password"
            label="Contraseña"
            onChange={handleEdition}
            value={edition.password}
          />
        </div>
        <div className=" h-64 flexpt-4 pb-10 content-center items-start">
          <EditPermissions
            edition={edition.modules}
            employee={edition}
            setEdition={setEdition}
          />
        </div>
      </div>

      <div className="flex justify-end p-3">
        <ButtonOk onClick={() => upDate()} type="ok" children="Editar" />
        <ButtonOk onClick={() => setShowEdit(false)} children="Cancelar" />
      </div>
    </div>
  );
};

export default EditEmployee;
