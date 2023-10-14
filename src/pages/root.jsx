import { Outlet, Navigate } from "react-router-dom";

function root() {
    const isAuth = true;

    return (
        <>
            Welcome
            {isAuth ?
                <Outlet />
                : <Navigate to="/authentification" replace />}

        </>
    )
}
export default root;
