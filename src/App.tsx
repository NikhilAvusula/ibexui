import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import FallBackUI from './components/errorHandling/FallbackHandler';
import { RoutesEnum } from './utils/RouteUtils';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import LayoutPage from './pages/LayoutPage';
import Landing from './pages/Landing';

function App() {
  const router = createBrowserRouter([
    {
      path:RoutesEnum.ALL,
      element:<ProtectedRoute/>,
      children:[
        {
          path:RoutesEnum.DEFAULT,
          element:<LayoutPage/>,
          children: [
            { 
              path: RoutesEnum.LANDING,
              element:<Landing/>
             }
          ],
        },
        {
          path: RoutesEnum.ALL,
          element:<LayoutPage/>,
          children:[
            {
              // path:RoutesEnum.LANDING, //start adding routes here
              // element:<LayoutPage/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <ErrorBoundary fallbackRender={FallBackUI}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
