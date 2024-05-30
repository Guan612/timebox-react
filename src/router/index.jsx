import {useRoutes,Navigate} from 'react-router-dom'
import Layout from '../layout/indexlayout'

const routers = [
    {
        path: '/',
        element: <Layout />,
        children: []
    }
]

export default function Router() {
    return useRoutes(routers)
}