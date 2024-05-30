import {Outlet} from 'react-router-dom'
import IndexNavbar from "./indexnavbar";
import IndexSidebar from "./indexsidebar";
export default function Layout() {
    return (
        <>
            <IndexNavbar />
            <IndexSidebar />
            <Outlet />
        </>
    );
}
