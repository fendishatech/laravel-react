import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/AuthContext";

const DashboardLayout = () => {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();
  };

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
            <a href="#" onClick={onLogout} className="btn-logout">
              Logout
            </a>
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
