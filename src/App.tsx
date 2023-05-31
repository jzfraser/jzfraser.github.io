import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";
import { Root } from "./routes/Root";
import { Skills } from "./routes/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: "/skills",
        element: <Skills />,
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
