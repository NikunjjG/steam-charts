import './App.scss';
import Home from './pages/home/Home';
import About from './pages/about/About'
import Advertise from './pages/advertise/Advertise'
import Privacy from './pages/privacy/Privacy'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/advertise",
      element: <Advertise/>
    },
    {
      path: "/privacy",
      element: <Privacy/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
