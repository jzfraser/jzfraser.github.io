import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./components/ErrorPage";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { PetBios } from "./routes/Pets";
import { Projects } from "./routes/Projects";
import { Root } from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pets",
        element: <PetBios />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
