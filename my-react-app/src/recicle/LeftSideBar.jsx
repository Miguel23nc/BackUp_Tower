import CardSideBar from "./cardSideBar";

const LeftSideBar = ({ options, handleSubmit }) => {
  return (
    <div
      className="flex pt-8 p-4 flex-col content-start 
    shadow-[4px_0_8px_rgba(128,128,128,0)] shadow-gray-300 
    absolute z-50  bg-white w-64 left-20 h-screen top-0 "
    >
      <span className="pl-4 text-3xl py-4 font-bold">{options.module}</span>
      {options.submodule.map((op, i) => {
        if (op.li) {
          return <CardSideBar key={i} handleSubmit={handleSubmit} lin={op.module} />;
        } else {
          return <CardSideBar handleSubmit={handleSubmit} key={i} name={op} link={op.toLowerCase()} />
        }
      })}
    </div>
  );
};

export default LeftSideBar;
