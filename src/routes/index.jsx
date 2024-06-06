import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';
import Beta from "../Pages/Beta/index";
import Login from "../Pages/Login";
import Project from "../Pages/project";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/beta',
        element: <Beta />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/project',
        element: <Project />
    }
])

export default routes