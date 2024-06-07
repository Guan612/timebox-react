import { useEffect } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import useAuth from "../hooks/login/useAuth";

import Layout from "../layout/indexlayout";
import Login from "../pages/login";
import Main from "../pages/main";
import Photos from "../pages/photos";
import UploadPhoto from "../pages/uploadphoto";

// RequireAuth 组件用于路由保护
const RequireAuth = ({ element }) => {
    const auth = useAuth();
    return auth ? element : <Navigate to="/login" />;
};

const routers = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/photos",
                element: <RequireAuth element={<Photos />} />,
            },
            {
                path:'/upload',
                element: <RequireAuth element={<UploadPhoto />} />
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
];

export default function Router() {
    return useRoutes(routers);
}
