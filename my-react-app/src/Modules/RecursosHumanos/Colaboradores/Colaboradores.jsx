import { useState } from "react";
import Register from "./Register/Register";
import List from "./List/List";
import { useAuth } from "../../../context/AuthContext";

const Colaboradores = () => {
  const { user } = useAuth();

  const hasPermission = () => {
    if (user) {
      const { modules } = user;
      const hasPermission1 = modules?.filter(
        (module) => module.submodule.name === "Colaboradores"
      );
      const hasPermission2 = hasPermission1[0].submodule.permissions;
      return hasPermission2;
    }
  };
  const permissionCreate = hasPermission().some(
    (permission) => permission === "write"
  );
  const permissionRead = hasPermission().some(
    (permission) => permission === "read"
  );
  const permissionEdit = hasPermission().some(
    (permission) => permission === "update"
  );
  const permissionDelete = hasPermission().some(
    (permission) => permission === "delete"
  );
  const [change, setCahnge] = useState("Listar");
  const handleSelect = (e) => {
    const { value } = e.target;
    setCahnge(value);
  };

  return (
    <div className="w-full" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="flex justify-start  pt-2 px-14">
        <select
          id="1"
          onChange={handleSelect}
          value={change}
          className="bg-slate-300 outline-none px-6 p-3 mt-6 mr-3 rounded-xl"
        >
          {permissionRead ? <option value="Listar">Listar</option> : null}
          {permissionCreate ? <option value="Crear">Crear</option> : null}
        </select>
      </div>

      {change === "Crear" ? (
        <Register />
      ) : (
        <List
          permissionEdit={permissionEdit}
          permissionDelete={permissionDelete}
        />
      )}
    </div>
  );
};

export default Colaboradores;
