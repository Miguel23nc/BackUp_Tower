import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PopUp from "../../recicle/popUps";
import { useAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const { signin, isAuthenticated, errors, setErrors } = useAuth();
  const errorForms = useSelector((state) => state.error);
  const dispatch = useDispatch();
  console.log(errorForms);
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    try {
      await signin(data);
      if (errors) {
        dispatch(setMessage(errors, "Error"));
        setErrors(null);
      }
    } catch (error) {
      dispatch(setMessage("Error al iniciar sesión", "Error"));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <PopUp />
      <div className="flex flex-col justify-center w-1/5 h-3/5 lg:p-12 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            LOGIN
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Dirección de correo electrónico
              </label>
              <input
                type="email"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("email", { required: "Email is required" })}
              />
              {formErrors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {formErrors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {formErrors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {formErrors.password.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes una cuenta?{" "}
            <a
              href="/contact"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Contactanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
