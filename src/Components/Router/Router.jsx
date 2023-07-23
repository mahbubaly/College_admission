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
import ReviewAll from "../Testimonial/ReviewAll";
import Admission from "../Admissions/Admission";
import Apply from "../Admissions/Apply";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import MyColleges from "../MyColleges/MyColleges";

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
                path: '/details/:id',
                element: <PrivateRoute><Details /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://admission-server-mahbubaly.vercel.app/colleges/${params.id}`)
            }
            ,
            {
                path: '/signUp',
                element: <SignUp />
            }
            ,
            {
                path: '/reviewAll',
                element: <ReviewAll />
            }
            ,
            {
                path: '/admissions',
                element: <Admission />
            },
            {
                path: '/applyNow',
                element: <Apply />
            },
            {
                path: '/myApplied',
                element: <MyColleges />
            }
        ]
    },
]);

export default router;