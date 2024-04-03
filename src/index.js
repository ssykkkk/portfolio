import { createRoot } from "react-dom/client";
import "./index.scss";
import About from "./components/pages/About/About";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Resume from "./components/pages/Resume/Resume";
import Skills from "./components/pages/Skills/Skills";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import { ThemeProvider } from "./share/ThemeContext";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
