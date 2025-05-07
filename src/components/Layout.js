import { Outlet, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import { logout } from "../services/authservice";

const Layout = ({ setIsLoggedIn }) => {
  console.log("Layout loaded");
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <Heading onLogout={handleLogout} />
      <div>
        {/* The outlet will render the nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
