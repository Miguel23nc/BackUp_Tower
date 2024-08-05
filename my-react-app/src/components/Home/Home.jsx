import Nav from "../Nav/Nav"
import SideBar from "../SideBar/SideBar"
import Register from "../Register/Register"
import Filters from "../Filters/Filters"

function Home() {

  return (
    <div className="flex flex-col">
      <SideBar />
      <Nav />
      <div className="flex flex-col  pl-20 ">
        <Filters />
        <Register />
      </div>
    </div>
  )
}

export default Home
