import RestaurantCard from "./RestaurantCard";
import resMockData from '../utils/data.json'
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const fetchData = async () => {
    // CORS issue
    // const resData = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5822999&lng=77.0499762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'), {
    //     headers: {
    //         'Access-Control-Allow-Origin' : '*',
    //         'Access-Control-Allow-Methods' : 'OPTIONS, GET, POST'
    //     }
    // })
    // const resjson = resData.json()
    // console.log(resjson);
    // return resjson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    return await new Promise((resolve, reject) => {
        setTimeout(()=>{
            const restaurantData = resMockData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurantData);
            return resolve(restaurantData);
        }, 1000)
    })
}


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

    // why do we have use state and why not use normal JS variable
        // - updating normal variables does not change anything in the UI
        // - updating useState variable function triggers re-render cycle of that component
        // which recalls the component with the updated value of variable
        // and this is why value of constant variable also gets updated
        // else directly updating the variable does not do anything
    // when to use usestate ?
        // - when you want to change anything in the UI, you use usestate
    // never use useState outside of your component,it will throw error 
    // bcz it is used to create local state variables inside your functional components
    // declare useState at the top of your component
    // never declare useState inside if else, for statements

    // if it re initiliza const variable with new value, how does it keep track of that line
    // not initialize itself as a new state bcz at that we are also setting the default value na

    // let searchText = ''  // with variable it is not working
    const [searchText, setSearchText] = useState([]);


    useEffect(() => {
        async function getData() {
            const data = await fetchData();
            setListOfRestaurant(data);
            setFilteredListOfRestaurant(data);
        }
        getData()
    }, [])

    // conditional rendering
    if(listOfRestaurant.length === 0) {
        return <Shimmer />
    }


    return (
        <div className='body'>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log('on click');
                    const filteredList = listOfRestaurant.filter((res) => { return res.info.avgRating > 4.2 })
                    console.log(filteredList);
                    setListOfRestaurant(filteredList)
                }} >
                    Top Rated Restaurant
                </button>
                <div className='search m-4 p-4' >
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => { 
                            // searchText = e.target.value; console.log(searchText) 
                            setSearchText(e.target.value)
                        }} />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                        // filter the restaurant card and update UI
                        console.log('search button clicked');
                        const filteredSearchRestaurant = listOfRestaurant.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })  
                        // update UI
                        // setListOfRestaurant(filteredSearchRestaurant)
                        setFilteredListOfRestaurant(filteredSearchRestaurant)
                    }} >Search</button>
                </div>    
            </div>
            <div className='flex flex-wrap' >
                    {
                        filteredListOfRestaurant.map( restaurant => 
                            // Key given to the parent element
                            <Link key = {restaurant.info.id} to={'/restaurant/' + restaurant.info.id} >
                                <RestaurantCard  resData = {restaurant} />
                            </Link>
                        
                        )
                    }
            </div>
        </div>
    )
}


export default Body;
