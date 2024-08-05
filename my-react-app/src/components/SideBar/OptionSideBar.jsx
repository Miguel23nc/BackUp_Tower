import { useEffect, useRef, useState } from "react";
import LeftSideBar from "../../recicle/LeftSideBar";

const OptionSideBar = ({ icon, options }) => {
  const ref = useRef(null);
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = () => {
    setMostrar(!mostrar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMostrar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-14 flex justify-center  h-14 m-2 my-8 bg-orange-300 rounded-full"
    >
      {mostrar && <LeftSideBar options={options} />}
      <button onClick={() => handleSubmit()}>{icon}</button>
    </div>
  );
};

export default OptionSideBar;
