import { useEffect, useState } from 'react';
import LOGO_URL from '../utils/constants';

import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


// Header component for header section: Logo, Nav Items
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState('Login');
    console.log('Header render', btnNameReact);

    // useEffet takes 2 argument => callback fun, dependency array
    // when this useEffect is called ?
    //  - called after every render of that component, 
    //  - dependency array changes the behaviour of its render
    //  - if no dependency array, useEffect is called on every component render
    //  - if dependency array is empty => useEffect is called on initial render and just once when component is rendered
    //  - if dependency array is [btnNameReact] => so everytime btnNameReact changes this useEffect will be called
    useEffect(()=> {
        console.log('use effect header');
    },[btnNameReact])

// mb = margin bottom
// mt = margin top
// ml = margin left
// mx = margin left right , means on x axis

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mb-2' >
            <div className='logo-container' >
                <img 
                className='w-56'  // change width of image w-xx
                src= {LOGO_URL}
                />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4' >
                    {/* px => padding on the x axis only */}
                    <li className='px-4' >online status {useOnlineStatus() ? '✅' : '🔴'}</li>
                    <li className='px-4' ><Link to='/' >Home</Link></li>
                    {/* <li>About Us</li> */}
                    {/* never use anchor tag, because it refreshes the whole page */}
                    {/* <li><a href='/about' >About Us</a></li>  */}
                    {/* link is given to us by react router dom and Behind the scene link uses anchor tag */}
                    <li className='px-4' ><Link to='/about' >About Us</Link></li>
                    <li className='px-4' ><Link to='/contact' >Contact Us</Link></li>
                    <li className='px-4' ><Link to='/grocery' >Grocery</Link></li>

                    <li className='px-4' >Cart</li>
                    <button className='btn-login' onClick={() => {
                        btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login')
                    }} >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )

}


export default Header;