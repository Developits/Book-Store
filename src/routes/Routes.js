import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBooks from "../pages/AddBooks";
import Home from "../pages/Home";
import ShowBooks from "../pages/ShowBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/showbooks",
        element: <ShowBooks></ShowBooks>,
      },
      {
        path: "/addbooks",
        element: <AddBooks></AddBooks>,
      },
    ],
  },
]);

export default router;
