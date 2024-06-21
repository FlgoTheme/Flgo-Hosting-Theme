import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';
import Beta from "../Pages/Beta/index";
import Login from "../Pages/Login";
import Project from "../Pages/project";
import TestPage from "../Pages/Test/index"
import Owner from "../Pages/Owner";

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
    },
    {
        path: '/test',
        element: <TestPage />
    },
    {
        path: '/owner',
        element: <Owner />
    }
])

export default routes