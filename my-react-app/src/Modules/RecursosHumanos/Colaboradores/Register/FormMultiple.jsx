import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { axiosOptions } from "./Axios";

const FormMultiple = ({ set, resetForm, initialData }) => {
  const [selectedModules, setSelectedModules] = useState("");
  const [selectedSubModules, setSelectedSubModules] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const { permissions, modules, submodules: sub } = axiosOptions();
  const submodules = (modulo)=>{
    return sub.filter((a) => a.module === modulo);
  }

  useEffect(() => {
    if (initialData) {
      setSelectedModules(initialData.name || "");
      setSelectedSubModules(initialData.submodule?.name || "");
      setSelectedPermissions(initialData.submodule?.permissions || []);
    }
  }, [initialData]);
  useEffect(() => {
    if (resetForm) {
      setSelectedModules("");
      setSelectedSubModules("");
      setSelectedPermissions([]);
    }
  }, [resetForm]);

  useEffect(() => {
    if (selectedModules && selectedSubModules && selectedPermissions.length) {
      set({
        name: selectedModules,
        submodule: {
          name: selectedSubModules,
          permissions: selectedPermissions,
        },
      });
    }
  }, [selectedModules, selectedSubModules, selectedPermissions]);

  const handleModules = (e) => {
    const { value } = e;
    setSelectedModules(value.name);
  };

  const handleSubModules = (e) => {
    const { value } = e;
    setSelectedSubModules(value.name);
  };

  const handlePermissions = (e) => {
    const { value } = e;
    const permissionNames = value.map((permission) => permission.name);
    setSelectedPermissions(permissionNames);
  };

  return (
    <div className="flex mt-4 items-end">
      <div className="flex flex-col mx-4 p-2">
        <label htmlFor="">Modulos</label>
        <Dropdown
          value={selectedModules}
          onChange={handleModules}
          options={modules}
          optionLabel="name"
          editable
          placeholder="Modulos"
          panelClassName="mt-2"
          className="p-2 rounded-lg border"
        />
      </div>
      <div className="flex flex-col mx-4 p-2">
        <label htmlFor="">SubModulos</label>
        <Dropdown
          value={selectedSubModules}
          onChange={handleSubModules}
          options={submodules(selectedModules)}
          optionLabel="name"
          editable
          placeholder="SubModulos"
          panelClassName="mt-2"
          className="p-2 rounded-lg border"
        />
      </div>
      <div className="flex mx-4 flex-col p-2">
        <label htmlFor="">Permisos</label>
        <MultiSelect
          value={selectedPermissions.map((name) =>
            permissions.find((permission) => permission.name === name)
          )}
          onChange={handlePermissions}
          options={permissions}
          optionLabel="name"
          panelClassName="pb-3"
          display="chip"
          placeholder="Permisos"
          maxSelectedLabels={2}
          className="border rounded-lg min-w-[250px]"
        />
      </div>
    </div>
  );
};

export default FormMultiple;
