import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import History from "../pages/Main/History";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      }
    ],
  },
]);

export default routes;
