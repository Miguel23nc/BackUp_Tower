import CardSideBar from "./cardSideBar";

const LeftSideBar = ({ options }) => {
  return (
    <div
      className="flex pt-12 pl-8 pr-4 flex-col content-start 
    shadow-[4px_0_8px_rgba(128,128,128,0)] shadow-gray-300 
    absolute z-50  bg-white w-64 left-20 h-screen top-0 "
    >
      <h1 className="font-medium text-4xl py-4">{options[0].area}</h1>
      {options.map((op, i) => {
        if (op.li) {
          return <CardSideBar key={i} lin={op.li} content={op.content} />;
        } else {
          return <CardSideBar key={i} name={op.name} link={op.link} />;
        }
      })}
    </div>
  );
};

export default LeftSideBar;
