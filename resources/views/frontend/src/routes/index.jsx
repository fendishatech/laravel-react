import { createBrowserRouter } from "react-router-dom";
import { Layout, Skills, New, Update } from "../components/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Skills />,
            },
            {
                path: "/new",
                element: <New />,
            },
            
            {
                path: "/update/:id",
                element: <Update />,
            },
        ],
    },
]);

export default router;