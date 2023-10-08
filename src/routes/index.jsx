import {createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default routes