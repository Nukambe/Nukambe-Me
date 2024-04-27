import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAppDispatch } from "./app/hooks"
import App from "./App"
import DashboardPage from "./pages/Dashboard"
import CertificationsPage, {
  loader as certificationsLoader,
} from "./pages/Certifications"
import SkillsPage from "./pages/ToolsPage"

export default function Routes() {
  const dispatch = useAppDispatch()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>404 Not Found</div>,
      loader: certificationsLoader(dispatch),
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ])

  return <RouterProvider router={routes} />
}
