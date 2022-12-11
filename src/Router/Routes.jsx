import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Coding from "../components/pages/Portfolio/Coding/Coding";
import Photography from "../components/pages/Portfolio/Photography/Photography";
import Runigo from "../components/pages/Portfolio/Runigo/Runigo";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/runigo',
                element : <Runigo></Runigo>
            },
            {
                path : '/coding',
                element : <Coding></Coding>
            },
            {
                path : '/photography',
                element : <Photography></Photography>
            }
        ]
    }
])

export default routes;