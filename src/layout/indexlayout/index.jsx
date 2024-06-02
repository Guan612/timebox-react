import { Outlet } from "react-router-dom";
import IndexNavbar from "./indexnavbar";
import IndexSidebar from "./indexsidebar";
export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <IndexNavbar />
            <div className="flex flex-row overflow-hidden">
                <IndexSidebar className="hidden md:block" />
                <div className=" overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
