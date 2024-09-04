import { useEffect, useRef, useState } from "react";
import LeftSideBar from "../../recicle/LeftSideBar";
import useref from "../../recicle/useRef";

const OptionSideBar = ({ icon, options }) => {
  const [mostrar, setMostrar] = useState(false);
  const ref = useref(setMostrar);

  const handleSubmit = () => {
    setMostrar(!mostrar);
  };

  return (
    <div
      ref={ref}
      className="w-14 flex justify-center  h-14 m-2 my-8 bg-orange-300 rounded-full"
    >
      {mostrar && <LeftSideBar handleSubmit={handleSubmit} options={options} />}
      <button onClick={handleSubmit}>{icon}</button>
    </div>
  );
};

export default OptionSideBar;
