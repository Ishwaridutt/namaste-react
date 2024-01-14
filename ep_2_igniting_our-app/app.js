// Chapter 06 - exploring the world


import React from 'react';
import ReactDOM from 'react-dom'
import Header from './src/components/Header';
import Body from './src/components/Body';

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
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);











