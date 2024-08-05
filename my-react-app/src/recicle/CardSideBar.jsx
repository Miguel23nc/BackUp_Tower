import { useState } from "react";
import { Link } from "react-router-dom";

const CardSideBar = ({ name, link, lin, content }) => {
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="p-3 text-base pl-6 font-medium ">
      {lin ? (
        <div className="">
          <button onClick={handleSubmit} className="flex w-full justify-between items-center">
            <span>{lin}</span>
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
                <Link to={`/home${o.link}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="list-none">
          <li className="list-none items-center ">
            <Link to={`/home${link}`}>{name}</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CardSideBar;
