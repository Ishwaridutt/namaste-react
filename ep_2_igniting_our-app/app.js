// Chapter 08 - lets get classy


import React from 'react';
import ReactDOM from 'react-dom'
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


/* 
my food app structure

    Header
        - logo
        - nav items
        - cart
    Body
        - search bar
        - restaurant list
            - restaurant card
                - image
                - NAME
                - rating
    Footer
        - links
        - copy right
*/


// Title component for display logo
const Title = () => {
    <a>
      <img className='logo' />  
    </a>
}





const AppLayout = () => {
    return (
        <div className='app' >
            <Header />
            {/* Outlet component => whenever there is a change in path, 
            loads the children according to the path */}
            <Outlet />
        </div>
    )
}


// Routing
// Client side routing => interchanging the components without reloading the page
// Server side routing => sending request to server for new page
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// put your routes in the RouterProvider and pass that to the root
root.render(<RouterProvider router = {appRouter} />);











