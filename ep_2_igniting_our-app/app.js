// Chapter 04 - Talk is Cheap, show me the code


import React from 'react';
import ReactDOM from 'react-dom'

import resData from './data.json'

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


const restaurantData = resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
console.log(restaurantData);

// Header component for header section: Logo, Nav Items
const Header = () => {
    return (
        <div className='header' >
            <div className='logo-container' >
                <img 
                className='logo'
                src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2'
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )

}

const RestaurantCard = (props) => {
    const resData = props.resData.info
    return (
        <div className='res-card' >
            <img 
                className='res-logo'
                alt='res-logo'
                src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.cloudinaryImageId
                }
            />
            <h3>{resData.name}</h3>
            <h3>{resData.cuisines.join(', ')}</h3>
            <h3>{resData.avgRating}</h3>
            <h3>{resData.costForTwo}</h3>
            <h3>{resData.sla.deliveryTime}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search' >Search</div>
            <div className='res-container' >
                {
                    restaurantData.map( restaurant => <RestaurantCard resData = {restaurant} />)
                }
            </div>
        </div>
    )
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











