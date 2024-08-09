import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import Register from "../Register/Register";
import Filters from "../Filters/Filters";
import { useState } from "react";

function Home() {
  const [mostrarList, setMostrarList] = useState(false);
  const [mostrarRegister, setMostrarRegister] = useState(false);
  const cambiarRegister = () => {
    setMostrarRegister(!mostrarRegister);
  };
  const cambiarList = () => {
    setMostrarList(!mostrarList);
  };

  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <SideBar />
      <Nav />
      <div className="flex relative bg-orange-100 items-start pl-20 ">
        <button
          className="flex  absolute bg-sky-800 text-white justify-center
          px-7 py-3 items-center rounded-md m-9 mx-20"
          onClick={cambiarRegister}
        >
          New
        </button>
        <div className="p-20 flex w-full justify-center items-center">
          {mostrarRegister && <Register />}
        </div>
      </div>

      <div className="flex  relative z-1 bg-sky-100  items-start  pl-20 ">
        <button
          className="flex absolute bg-sky-800 text-white justify-center
          px-7 py-3 items-center rounded-md m-9 mx-20"
          onClick={cambiarList}
        >
          List
        </button>
        <div className=" flex justify-center p-20 items-center">
          {mostrarList && <Register />}
        </div>
      </div>
    </div>
  );
}

export default Home;
