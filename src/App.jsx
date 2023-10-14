import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import { Authentification, Dashboard, Patients, Patient } from "./pages";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Root />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                    index: true
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
        },
        {
            path: "/authentification",
            element: <Authentification />
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
