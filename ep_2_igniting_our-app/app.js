// Chapter 10 - jo dikhata hai, vo bikta hai


import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom'
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
// import Grocery from './src/components/Grocery'; // removed because lazy loaded below

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


// configure tailwind via https://tailwindcss.com/docs/installation/using-postcss
// 


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


// optimizing load time
// so when you bundle your app, it gets compiled in 1 single index file whose size will keep on increasing
// because it contains all of the components
// so overcome this we will do chunking or code splitting  or lazy loading 
// or on demand loading or dynamic imports or dymanic bundling
// bascially split your aap into logical smaller chunks

// this will split the bundling of Grocery component and whn you click on the UI
// a differnt file will be loaded with the component data
const Grocery = lazy(() => import('./src/components/Grocery'));

// Error: A component suspended while responding to synchronous input.
// reason: React is very fast, since you have splitted your grocery component in different bundle
// react tries to load it immediately but it fails since that bundle is not sent by server yet.
// so it suspends the loading of the component.
// resolution: wrap your lazy component inside Suspense component in the router



// single responsibiity principle
// break down your code into a modular pieces, more re-usable, testable, maintainable

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
            },
            {
                path: '/grocery',
                element: <Suspense fallback = {<h1>Component Loading. Please wait...</h1>} >
                    <Grocery />
                </Suspense>
            },
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// put your routes in the RouterProvider and pass that to the root
root.render(<RouterProvider router = {appRouter} />);



// ---integrating tailwind---
// install according to parcel
// tailwind config file  =>  what files we can find tailwind inside
// postcss config file
// import tailwind into index.css 
// install Tailwind CSS IntelliSense => vs code extension

// pros and cons of tailwind
// you donot have to switch to multiple css files
// reduces the redudent and duplication css and stop you from using unsed css
// very easy to add support for dark mode
// sometimes you have to a lot of css classes to a component which makes your code look ugly









