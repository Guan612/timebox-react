import {useRoutes,Navigate} from 'react-router-dom'

import Layout from '../layout/indexlayout'
import Login from '../pages/login'
import Main from '../pages/main'
import Photos from '../pages/photos'

const routers = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<Main/>
            },
            {
                path: '/photos',
                element:<Photos/>
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