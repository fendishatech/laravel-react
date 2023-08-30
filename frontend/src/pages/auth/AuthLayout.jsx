import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/AuthContext";

const AuthLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
