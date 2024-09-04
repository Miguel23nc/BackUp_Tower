import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./components/Nav/Profile.Button";
import Settings from "./components/Nav/Settings.Button";
import Nav from "./components/Nav/Nav";
import Error from "./components/Error/Error";
import SideBar from "./components/SideBar/SideBar";
import Title from "./components/Home/Title";

function App() {
  const location = useLocation();
  const path = ["/home", "/"].includes(location.pathname);

  return (
    <AuthProvider>
      <Provider store={store}>
        <div>
          {!path && <SideBar />}
          {!path && <Nav />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Error />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/home/:title" element={<Title />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Provider>
    </AuthProvider>
  );
}

export default App;
