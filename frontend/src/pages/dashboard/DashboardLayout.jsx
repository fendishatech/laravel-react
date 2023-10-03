import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/AuthContext";
import { useEffect } from "react";
import axiosClient from "../../api/axios-client";

const DashboardLayout = () => {
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      console.log({ data });
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div className=""></div>
          <div className="">
            Welcome {user.name}
            <button onClick={onLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
