import { Navigate } from "react-router-dom";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";

const LoggedInProtectedRoute = ({ children }) => {
  const {
    values: { isLoggedIn },
  } = useBloggingContext();

  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default LoggedInProtectedRoute;
