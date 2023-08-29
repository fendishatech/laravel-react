import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Users from "./pages/dashboard/Users";
import NotFound from "./pages/NotFound";
import Home from "./pages/dashboard/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        // element: <Navigate to={<Users />} />,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
