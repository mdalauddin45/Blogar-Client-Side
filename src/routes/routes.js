import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "about",
      //     element: <About />,
      //   },
      //   {
      //     path: "top-rated",
      //     element: <TopRated />,
      //   },
      //   {
      //     path: "cart",
      //     element: <Cart />,
      //   },
    ],
  },
]);

export default routes;
