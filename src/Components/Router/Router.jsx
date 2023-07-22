import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Colleges from "../Colleges/Colleges";
import Details from "../Colleges/Details";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

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
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/details',
                element: <Details />
            }
            ,
            {
                path: '/signUp',
                element: <SignUp />
            }
        ]
    },
]);

export default router;