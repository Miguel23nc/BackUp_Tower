import { useEffect, useState } from "react";
import ButtonOk from "../../../../recicle/Buttons";
import FormMultiple from "../Register/FormMultiple";

const EditPermissions = ({ edition, setEdition }) => {
  const [formInstances, setFormInstances] = useState([]);

  useEffect(() => {
    if (edition && edition.length > 0) {
      const updatedInstances = edition.map((module, index) => ({
        id: index + 1,
        data: module,
      }));

      // Solo actualizar si los datos son diferentes para evitar bucles
      setFormInstances((prevInstances) => {
        const isSame = prevInstances.length === updatedInstances.length &&
          prevInstances.every((inst, idx) => inst.data === updatedInstances[idx].data);

        if (!isSame) {
          return updatedInstances;
        }
        return prevInstances;
      });
    }
  }, [edition]);

  useEffect(() => {
    if (formInstances.length > 0) {
      const act = formInstances.map((instance) => instance.data);

      // Verificar si los datos han cambiado antes de actualizar el estado
      setEdition((prevData) => {
        const isSame = JSON.stringify(prevData.modules) === JSON.stringify(act);
        if (!isSame) {
          return { ...prevData, modules: act };
        }
        return prevData;
      });
    }
  }, [formInstances, setEdition]);

  const updateFormData = (id, newData) => {
    setFormInstances((prevInstances) => {
      const updatedInstances = prevInstances.map((instance) =>
        instance.id === id ? { ...instance, data: newData } : instance
      );
      return updatedInstances;
    });
  };

  const addFormInstance = () => {
    const newId = formInstances.length
      ? formInstances[formInstances.length - 1].id + 1
      : 1;
    setFormInstances((prevInstances) => [
      ...prevInstances,
      { id: newId, data: {} },
    ]);
  };

  const removeFormInstance = (id) => {
    setFormInstances((prevInstances) =>
      prevInstances.filter((instance) => instance.id !== id)
    );
  };

  return (
    <div className="flex flex-col pb-10 content-center items-start">
      <div>
        {formInstances.map((instance) => (
          <div key={instance.id} className="flex content-center items-end">
            <FormMultiple
              initialData={instance.data} 
              set={(data) => updateFormData(instance.id, data)}
            />
            <ButtonOk
              styles="m-0 my-2 mx-2 px-2"
              children="X"
              onClick={() => removeFormInstance(instance.id)}
            />
          </div>
        ))}
        <ButtonOk
          type="ok"
          children="+"
          classe="w-full"
          styles="mt-10 px-8 mx-4"
          onClick={addFormInstance}
        />
      </div>
    </div>
  );
};

export default EditPermissions;
