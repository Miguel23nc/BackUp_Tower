import { useEffect, useState } from "react";
import axios from "../../api/axios";

const axiosOptions = () => {
  const [roles, setRoles] = useState([]);
  const [modules, setModules] = useState([]);
  const [submodules, setSubmodules] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const rolesResponse = await axios.get("/getRoles");
        const modulesResponse = await axios.get("/getModules");
        const permissionsResponse = await axios.get("/getPermissions");
        const submodulesResponse = await axios.get("/getSubmodules");

        setRoles(rolesResponse.data);
        setModules(modulesResponse.data);
        setPermissions(permissionsResponse.data)
        setSubmodules(submodulesResponse.data);
      } catch (error) {
        console.error("Error fetching options:", error);
        setError("Error fetching options");
      }
    };

    fetchOptions();
  }, []);

  return { roles, modules, submodules, permissions, error };
};

export default axiosOptions;
