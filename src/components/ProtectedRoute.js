import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ isLoggedIn, children }) {
  console.log("ProtectedRoute");
  if (!isLoggedIn) {
    //Redirect to login page if not logged in
    return <Navigate to="/" replace />;
  }
  //if logged in, render the child components using outlet
  return children;
}

export default ProtectedRoute;
