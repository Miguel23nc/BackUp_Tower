import { useDispatch } from "react-redux";
import { setMessage } from "../../../redux/actions";
import PopUp from "../../../recicle/popUps";
import ButtonOk from "../../../recicle/Buttons/Buttons";

const Register = ({ validate, registrar, children }) => {
  const dispatch = useDispatch();
  const enviar = async () => {
    dispatch(setMessage("Cargando...", "Info"));
    try {
      if (validate) {
        await registrar();
      } else {
        dispatch(setMessage("Campos Incompletos", "Error"));
      }
    } catch (error) {
      console.log("Error : ", error);
      dispatch(setMessage(error, "Error"));
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
      <PopUp />
      {children}
      <div className="flex justify-center">
        <ButtonOk children="Enviar" onClick={enviar} type="ok" />
        <ButtonOk children="Cancelar" />
      </div>
    </div>
  );
};

export default Register;
