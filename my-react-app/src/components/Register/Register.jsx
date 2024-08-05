import { useEffect, useState } from "react";
import PopUp from "../../recicle/popUps";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../../recicle/Inputs";

const Register = () => {
    const navigate = useNavigate();
    const { signup, isAuthenticated } = useAuth();
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [showPopUp, setShowPopUp] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated) navigate("/home");
    }, [isAuthenticated, navigate]);

    const watchRUC = watch('ruc');

    useEffect(() => {
        if (watchRUC && watchRUC.length >= 11) {
            consultarRuc(watchRUC);
        }
    }, [watchRUC]);

    const consultarRuc = async (numeroRuc) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/ruc?numeroRuc=${numeroRuc}`);
            const razonSocial = response.data?.razonSocial || "";
            setValue('name', razonSocial);
        } catch (error) {
            setError("Error al consultar RUC");
            setShowPopUp(true);
        }
    };

    const enviar = async (data) => {
        try {
            if (data.ruc.length >= 11 && data.email && data.password) {
                await signup(data);
            } else {
                setError("Por favor complete todos los campos requeridos");
                setShowPopUp(true);
            }
        } catch (error) {
            setError("Error al registrar");
            setShowPopUp(true);
        }
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <div className="flex z-1 justify-center h-80 w-full items-center  ">
            {showPopUp && <PopUp onClose={handleClosePopUp} message={error} />}

            <form onSubmit={handleSubmit(enviar)} className="z-2 flex flex-wrap space-x-10  mt-6">
                <Input
                    label="RUC"
                    type="text"
                    register={register('ruc', { required: 'RUC is required' })}
                    error={errors.ruc}
                />
                <Input
                    label="Razón Social"
                    type="text"
                    register={register('name')}
                    readOnly
                />
                <Input
                    label="Dirección de correo electrónico"
                    type="email"
                    register={register('email', { required: 'Email is required' })}
                    error={errors.email}
                />
                <Input
                    label="Contraseña"
                    type="password"
                    register={register('password', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                    })}
                    error={errors.password}
                />
                
                <div className="flex  justify-center  items-end">
                    <button
                        type="submit"
                        className="flex w-full justify-center  items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
