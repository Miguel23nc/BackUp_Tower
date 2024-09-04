import { useState } from "react";
import { Link } from "react-router-dom";

const CardSideBar = ({ name, link, lin, content, handleSubmit }) => {
  const [mostrar, setMostrar] = useState(false);

  const Submit = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="p-3 text-base pl-8 hover:bg-slate-200 rounded-lg font-medium ">
      {lin ? (
        <div className="">
          <button
            onClick={Submit}
            className="flex w-full justify-between items-center"
          >
            <span>hola</span>
            <span
              className={`ml-2 transform transition-transform duration-300 ${
                mostrar ? "rotate-90" : "rotate-0"
              }`}
            >
              &gt;
            </span>
          </button>
          <ul
            className={`list-none transition-[max-height,opacity] duration-300 ease-in-out ${
              mostrar ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {content.map((o, i) => (
              <li key={i} className="items-center p-3 ">
                <Link to={`/home/${o.link}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="list-none">
          <Link to={`/home/${link}`}>
            <li className="list-none items-center ">
              <button onClick={handleSubmit}>{name}</button>
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default CardSideBar;
