import React from "react";
import moment from "moment";
import useref from "../../../../recicle/useRef";
import ButtonOk from "../../../../recicle/Buttons";
const Details = (props) => {
  const { setShowDetail, buttonok, employee } = props;
  const detailsRef = useref(setShowDetail);

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div
      ref={detailsRef}
      className={`w-[70%] h-[80%] bg-white flex flex-col justify-center
         border-stone-500 border shadow-lg fixed top-20 z-50 rounded-xl`}
    >
      <div className="flex justify-center h-[80%]">
        <div className="w-[60%] h-[90%]">
          <div className="p-10 m-5 h-full overflow-y-auto bg-slate-100 rounded-lg shadow-black shadow-sm">
            <h3 className="text-2xl font-bold ">Módulos</h3>
            {employee.modules.map((module, index) => (
              <div key={index} className="mt-2">
                <p>
                  <strong>Módulo:</strong> {module.name}
                </p>
                <p>
                  <strong>Submódulo:</strong> {module.submodule.name}
                </p>
                <p>
                  <strong>Permisos:</strong>{" "}
                  {module.submodule.permissions.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="fl">
          <div className="w-60 p-4 m-5 h-[36%] bg-slate-100 rounded-lg shadow-black shadow-sm">
            <img alt={employee.name} src="./" />
          </div>
          <div className="w-60 p-4 m-5 h-[50%] bg-slate-100 rounded-lg shadow-black shadow-sm">
            <p>
              <strong>Nombre:</strong> {employee.name}
            </p>
            <p>
              <strong>DNI:</strong> {employee.dni}
            </p>
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Empresa:</strong> {employee.business}
            </p>
            <p>
              <strong>Teléfono:</strong> +{employee.phoneCode}{" "}
              {employee.phoneNumber}
            </p>
            <p>
              <strong>Fecha de Registro:</strong>{" "}
              {moment(employee.createdAt).format("DD/MM/YYYY HH:mm")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-3">
        {buttonok}
        <ButtonOk onClick={handleCloseDetail} children="Cerrar" />
      </div>
    </div>
  );
};

export default Details;
