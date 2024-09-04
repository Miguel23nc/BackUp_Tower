import { useEffect, useState } from "react";
import PopUp from "../../../../recicle/popUps";
import FormOne from "./FormOne";
import Permissions from "./Permissions";
import ButtonOk from "../../../../recicle/Buttons";
import { useAuth } from "../../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../../../redux/actions";

const Register = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showPermissions, setShowPermissions] = useState(true);
  const [userData, setUserData] = useState([]);
  const [form1, setForm1] = useState(null);
  const [form2, setForm2] = useState(null);
  const [resetForm, setResetForm] = useState(false);
  const { signup, setErrors, setResponse } = useAuth();
  const errorForms = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    dni: "",
    name: "",
    email: "",
    business: "",
    phoneCode: "+51",
    phoneNumber: "",
    password: "",
  });
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleShowPermissions = () => {
    setShowPermissions(!showPermissions);
  };
  useEffect(() => {
    if (form1 && form2) {
      form1["modules"] = form2;
      setUserData(form1);
    }
  }, [form1, form2]);
  const handleClosePopUp = () => {
    dispatch(setMessage("", ""));
    setShowPopUp(false);
    setResponse(null);
    setErrors(null);
  };
  useEffect(() => {
    if (errorForms.message) {
      setShowPopUp(true);
    }
  }, [errorForms]);

  const register = async () => {
    try {
      if (!errorForms.message) {
        if (!form1 || !form2) {
          dispatch(setMessage("Faltan datos", "Error"));
          setShowPopUp(true);
        } else {
          const newUserData = {
            ...userData,
            dni: Number(userData.dni),
          };
          await signup(newUserData);
          setResetForm(true);
        }
      } else {
        dispatch(setMessage("Ocurrió un problema", "Error"));
        setShowPopUp(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
      {showPopUp && <PopUp onClose={handleClosePopUp} message={errorForms} />}

      <ButtonOk
        type="ok"
        styles="ml-12 mt-8 px-8  mx-4 "
        children="Datos Básicos"
        onClick={handleShowForm}
      />
      {showForm && (
        <FormOne
          setFormData={setFormData}
          formData={formData}
          setForm1={setForm1}
          resetForm={resetForm}
        />
      )}

      <ButtonOk
        type="ok"
        styles="ml-12 mt-8 px-8  mx-4 "
        children="Modulos y permisos"
        onClick={handleShowPermissions}
      />
      {showPermissions && (
        <Permissions setForm2={setForm2} resetForm={resetForm} />
      )}

      <div className="flex justify-center ">
        <ButtonOk type="ok" onClick={register} children="Registrar" />
        <ButtonOk children="Cancelar" />
      </div>
    </div>
  );
};

export default Register;
