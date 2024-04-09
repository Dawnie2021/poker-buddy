import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ManageSessions from "./pages/ManageSessions.jsx";
import Session from "./components/Session.jsx";
import Settings from "./pages/Settings.jsx";
import { element } from "prop-types";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/users/:id",
        element: <Profile />,
      },
      {
        path: "/me",
        element: <Profile />,
      },

      {
        path: "/managesessions",
        element: <ManageSessions />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/Session",
        element: <Session />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
