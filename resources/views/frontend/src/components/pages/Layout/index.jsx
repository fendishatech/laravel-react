import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import  Navbar  from "./navbar";
import  Footer  from "./footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
            <Footer />
        </>
    );
};

export default Layout;
