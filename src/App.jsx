import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import { Appointments, Authentification, Dashboard, Patients, Patient } from "./pages";
import "./styles/main.scss";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Root />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    index: true
                },
                {
                    path: "patients-list",
                    element: <Patients />
                },
                {
                    path: ":patientID",
                    element: <Patient />
                },
                {
                    path: "appointments",
                    element: <Appointments />
                }
            ]
        },
        {
            path: "authentification",
            element: <Authentification />
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
