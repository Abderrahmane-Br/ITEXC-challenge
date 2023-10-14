import { Outlet } from "react-router-dom";
import { Toolbar, Navbar } from "../generic-components";

function root() {
    return (
        <>
            <Toolbar />
            <div className="worspace">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}
export default root;
