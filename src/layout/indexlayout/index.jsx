import { Outlet } from "react-router-dom";
import IndexNavbar from "./indexnavbar";
import IndexSidebar from "./indexsidebar";
export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <IndexNavbar />
            <div className="flex flex-row overflow-hidden">
                <IndexSidebar className="basis-1/6 hidden md:block" />
                <div className="md:w-5/6 overflow-y-auto w-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
