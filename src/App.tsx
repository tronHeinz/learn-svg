import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: "/learn-svg", // Replace 'your-repo-name' with the actual name of your GitHub repository
  }
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
