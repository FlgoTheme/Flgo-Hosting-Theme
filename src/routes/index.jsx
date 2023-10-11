import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';
import Beta from "../Pages/Beta/index";

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
    }
])

export default routes