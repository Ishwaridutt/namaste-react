import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";





const RestaurantMenu = () => {
    console.log('RestaurantMenu compo');
    // const [ resInfo, setResinfo ] = useState(null);
    
    // rect router dom hook 
    const {resId} = useParams();
    // custom hook
    // WHY this component get re-excuted ?
    const resInfo = useRestaurantMenu(resId);
    console.log('restaurant menu:', resId, resInfo);

    // useEffect(() => {
    //     const resMenueData =  fetchMenu(setResinfo)
    //     console.log('resMenueData2===>', resMenueData);
    //     // setResinfo(resMenueData);
    // }, [])

    const onlineStatus = useOnlineStatus()

    if(!onlineStatus) {
        return (
            <div>
                <h1>
                    You are offline. Please check your Internet connection.
                </h1>
            </div>
        )
    }

    if(resInfo === null) return <Shimmer />

    const restaurantInfo = resInfo[0].info
    const {name, cuisines, areaName, costForTwoMessage} = restaurantInfo
    const restaurantMenuInfoCard = resInfo[2].cards[3].itemCards


    return (
        <div className="menu">
            <div>
                <h1> {name} </h1>
                <p> {cuisines} | {areaName} | {costForTwoMessage}</p>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>
                    {restaurantMenuInfoCard.map((item) => {
                        return <li key={item.card.info.id} > {item.card.info.name} | {'Rs ' + item.card.info.price / 100} </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
