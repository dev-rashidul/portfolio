import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default routes;