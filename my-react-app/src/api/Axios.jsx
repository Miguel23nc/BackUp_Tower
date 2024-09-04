import { useEffect, useState } from "react";
import axios from "./axios";

export const axiosOptions = () => {
  const [modules, setModules] = useState([]);
  const [submodules, setSubmodules] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const modulesResponse = await axios.get("/getModules");
        const permissionsResponse = await axios.get("/getPermissions");
        const submodulesResponse = await axios.get("/getSubmodules");
        const employeesResponse = await axios.get("/employee");

        setModules(modulesResponse.data);
        setPermissions(permissionsResponse.data);
        setSubmodules(submodulesResponse.data);
        setEmployees(employeesResponse.data);
      } catch (error) {
        console.error("Error fetching options:", error);
        setError("Error fetching options");
      }
    };

    fetchOptions();
  }, []);

  return { modules, submodules, permissions, employees, error };
};

// export const consultarRuc = async (numeroRuc, dispatch) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:3001/api/ruc?numeroRuc=${numeroRuc}`
//     );
//     return response.data?.razonSocial || "";
//   } catch (error) {
//     dispatch(setMessage("Error al consultar RUC", "Error"));
//     return "Error al consultar RUC"
//   }
// };
