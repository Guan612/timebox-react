import {useRoutes,Navigate} from 'react-router-dom'

import Layout from '../layout/indexlayout'
import Login from '../pages/login'
import Main from '../pages/main'

const routers = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<Main/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    }
]

export default function Router() {
    return useRoutes(routers)
}