import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ChefDetail from '../layouts/ChefDetail'
import Blogs from '../layouts/Blogs'
import Home from '../layouts/Home'
import Login from '../layouts/Login'
import Register from '../layouts/Register'
import PrivateRoute from './PrivateRoute'
import ErrorPage from '../components/ErrorPage'


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage/> ,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:() => fetch('https://chopsticks-server-side-tasnihabinteakram.vercel.app/chefs')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/chef/:id',
                element: <PrivateRoute><ChefDetail/></PrivateRoute>,
                loader: ({params}) => fetch(`https://chopsticks-server-side-tasnihabinteakram.vercel.app/chefs/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blogs/>
            }
        ]
    }
])

export default routes