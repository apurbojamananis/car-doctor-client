import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className=" flex justify-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;
