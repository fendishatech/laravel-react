import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/AuthContext";

const DashboardLayout = () => {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
