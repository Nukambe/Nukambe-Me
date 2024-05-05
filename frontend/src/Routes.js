import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectPage from "./pages/ProjectPage";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path: "work/:id",
      element: <ProjectPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
