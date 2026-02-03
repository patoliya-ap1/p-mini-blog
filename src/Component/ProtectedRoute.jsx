import { Navigate } from "react-router-dom";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";

const ProtectedRoute = ({ children }) => {
  const {
    values: { isLoggedIn },
  } = useBloggingContext();

  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
