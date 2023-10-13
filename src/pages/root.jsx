import { Outlet } from "react-router-dom";

function root() {
    return (
        <>
            Welcome
            <Outlet />
        </>
    )
}
export default root;
