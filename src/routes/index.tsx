import { createBrowserRouter } from 'react-router-dom';
import { routeConstants } from '../constants/routeConstants';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/Login/Login';

// 

const AppRoutes = createBrowserRouter([
    {
      path: routeConstants.HOME,
      element: <Home></Home>,
    },
    {
      path: routeConstants.LOGIN,
      element: <Login></Login>,
    },
  ]);

  export default AppRoutes;

