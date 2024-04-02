import { createRoot } from "react-dom/client";
import "./index.scss";
import About from "./components/pages/About/About";
// import { Provider } from "react-redux";
// import { store } from "./share/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./components/pages/Resume/Resume";
import Skills from "./components/pages/Skills/Skills";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import { ThemeProvider } from './share/ThemeContext';
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
]);

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
