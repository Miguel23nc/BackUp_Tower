import { useEffect, useState } from "react";
import PopUp from "../../recicle/popUps";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import axios from "../../api/axios";
import Input from "../../recicle/Inputs";
import Select from "../../recicle/Select";
import axiosOptions from "./Axios";
import validate from "../../recicle/validate";
import { useDispatch, useSelector } from "react-redux";
import { setErrorsA } from "../../redux/actions";

const Register = () => {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const { roles, modules, submodules, error: fetchError } = axiosOptions();
  const [formData, setFormData] = useState({
    ruc: "",
    name: "",
    email: "",
    role: "",
    module: "",
    submodules: [],
    password: "",
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (formData.ruc.length >= 11) {
      consultarRuc(formData.ruc);
    }
  }, [formData.ruc]);

  const consultarRuc = async (numeroRuc) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/ruc?numeroRuc=${numeroRuc}`
      );
      const razonSocial = response.data?.razonSocial || "";
      setFormData((prevData) => ({ ...prevData, name: razonSocial }));
    } catch (error) {
      setError("Error al consultar RUC");
      setShowPopUp(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, options, type } = e.target;

    if (type === "select-multiple" && name === "submodules") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setErrorsA((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const errors = useSelector((state) => state.errores);
  const dispatch = useDispatch();

  const validated = validate(formData);
  console.log(errors);
  const enviar = async (e) => {
    e.preventDefault();

    const isValid = validate(formData)(dispatch); // Usar dispatch aquí

    if (!isValid) {
      console.log(errors);
      return;
    }
    try {
      console.log(formData);
      //   if (formData.ruc.length >= 11 && formData.email && formData.password) {
      //     await signup(formData);
      //   } else {
      //     setError("Por favor complete todos los campos requeridos");
      //     setShowPopUp(true);
      //   }
    } catch (error) {
      setError("Error al registrar");
      setShowPopUp(true);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
      setShowPopUp(true);
    }
  }, [fetchError]);

  return (
    <div className="flex justify-center items-center w-full p-6">
      {showPopUp && <PopUp onClose={handleClosePopUp} message={error} />}
      <form
        onSubmit={enviar}
        className="bg-white flex flex-wrap space-x-12 p-12 items-center rounded-lg shadow-md w-full"
      >
        <Input
          label="RUC"
          type="text"
          name="ruc"
          value={formData.ruc}
          onChange={handleChange}
          error={errors.ruc}
        />
        <Input
          label="Razón Social"
          type="text"
          name="name"
          value={formData.name}
          readOnly
        />
        <Input
          label="Dirección de correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Select
          label="Rol"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={roles}
          error={errors.role}
        />
        <Select
          label="Modulo"
          name="module"
          value={formData.module}
          onChange={handleChange}
          options={modules}
          error={errors.module}
        />
        <Select
          label="Submódulos"
          name="submodules"
          value={formData.submodules}
          onChange={handleChange}
          options={submodules}
          defaulValue={[]}
          multiple
          error={errors.submodules}
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
