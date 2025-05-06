import { Outlet } from "react-router-dom";
import { LandingPage } from "./LandingPage";



export function Layout() {
    return <div className="layout-container">

        <div className="layout-item">
            <LandingPage />
        </div>
        <div className="layout-item">
            <Outlet />
        </div>


    </div>;
}