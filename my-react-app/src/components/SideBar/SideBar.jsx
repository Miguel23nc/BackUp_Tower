import { Link } from "react-router-dom";
import OptionSideBar from "./OptionSideBar";
import { useAuth } from "../../context/AuthContext";
const examples = [
  [
    { area: "Contabilidad" },
    {
      li: "Hola",
      content: [
        {
          name: "hola1",
          link: "/prueba1",
        },
        {
          name: "hola11",
          link: "/prueba11",
        },
      ],
    },
    {
      li: "Hi2",
      content: [
        {
          name: "Hola122",
          link: "/prueba221",
        },
        {
          name: "hola1133",
          link: "/prueba1133",
        },
      ],
    },
    {
      name: "Hola2",
      link: "/prueba2",
    },
    {
      name: "Hola3",
      link: "/prueba3",
    },
  ],
  [
    { area: "Recursos Humanos" },
    {
      name: "Clientes",
      link: "/clientes",
    },
    {
      name: "Trabajadores",
      link: "/trabajadores",
    },
  ],
  [
    { area: "Finanzas" },
    {
      name: "Hola3",
      link: "/prueba3",
    },
  ],
  [
    { area: "Ecology" },
    {
      name: "Hola3",
      link: "/prueba3",
    },
  ],
];

const SideBar = () => {
  const { user } = useAuth();
  const isSuperRole = user
    ? ["admin", "gerencia general"]?.includes(user?.role?.toLowerCase())
    : null;

  const userOptions = isSuperRole
    ? examples
    : examples?.filter(
        (example) => example[0]?.area?.toLowerCase() === user?.module?.toLowerCase()
      );

  return (
    <div
      className="bg-sky-600 absolute z-50 items-center  flex flex-col 
         w-20 border-r border-t-stone-400 h-screen"
    >
      <div className=" mt-[-18px]">
        <div className="w-14 flex justify-center  items-center h-14 m-2 my-8 bg-orange-300 rounded-full">
          <Link to={"/home"}>
            <span>LOGO</span>
          </Link>
        </div>
      </div>
      <div>
        {userOptions.length > 0
          ? userOptions.map((options, index) => (
              <OptionSideBar
                key={index}
                icon={<img src="" alt="icon" />}
                options={options}
              />
            ))
          : "No hay"}
      </div>
    </div>
  );
};

export default SideBar;
