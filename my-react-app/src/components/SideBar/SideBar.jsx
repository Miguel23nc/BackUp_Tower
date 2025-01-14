import { Link } from "react-router-dom";
import OptionSideBar from "./OptionSideBar";
import useModulesAndSubModules from "./Links";

const SideBar = () => {
  const { links } = useModulesAndSubModules();
  const userOptions = links;

  return (
    <div
      className="bg-sky-600 fixed  z-50 items-center  flex flex-col 
         w-20 border-r border-t-stone-400 min-h-screen"
    >
      <div className=" mt-[-18px]">
        <div className="w-14 flex justify-center items-center h-14 m-2 my-8 bg-orange-300 rounded-full">
          <Link to={"/home"}>
            <span className="font-semibold text-sm text-blue-800">TOWER</span>
          </Link>
        </div>
      </div>
      <div>
        {userOptions.length > 0
          ? userOptions?.map((options, index) => (
              <OptionSideBar
                key={index}
                icon={<img src={`/${options.module}.png`} alt="icon" />}
                options={options}
              />
            ))
          : " "}
      </div>
    </div>
  );
};

export default SideBar;
