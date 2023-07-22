import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Colleges from "../Colleges/Colleges";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/colleges',
                element: <Colleges />
            }
        ]
    },
]);

export default router;