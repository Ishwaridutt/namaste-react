import RestaurantCard from "./RestaurantCard";
import resData from '../utils/data.json'
import { useState } from "react";


const restaurantData = resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
console.log(restaurantData);


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantData);


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
            </div>

            <div className='search' >Search</div>
            <div className='res-container' >
                {
                    listOfRestaurant.map( restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />)
                }
            </div>
        </div>
    )
}


export default Body;
