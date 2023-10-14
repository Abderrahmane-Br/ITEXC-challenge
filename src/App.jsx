import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import { Dashboard, Patients, Patient } from "./pages";
function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Root />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />
                },
                {
                    path: "/patients-list",
                    element: <Patients />
                },
                {
                    path: "/:patientID",
                    element: <Patient />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
