import React from "react";

const ButtonOk = (props) => {
  const { type, children, onClick, styles , classe} = props;
  const color =
    type === "ok"
      ? "bg-indigo-600 hover:bg-indigo-500"
      : "bg-red-600 hover:bg-red-500";
  return (
    <div className={` ${styles ? styles : "m-4 px-8  mx-4 "} `}>
      <button
        onClick={onClick}
        className={` ${color}  text-white ${classe} px-4 py-2 
          rounded-md`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonOk;
