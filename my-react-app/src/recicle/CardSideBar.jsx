import { Link } from "react-router-dom";

const CardSideBar = ({ name, link, handleSubmit }) => {
  return (
    <div className="p-3 text-base pl-8 flex items-start justify-start hover:bg-slate-200 rounded-lg font-medium ">
      <ul className="list-none">
        <Link to={`/home/${link}`}>
          <li className="list-none items-center ">
            <button onClick={handleSubmit}>{name}</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default CardSideBar;
