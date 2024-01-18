import { useEffect, useState } from "react";
import { restaurantMenuMockData } from "../utils/restMenuData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const fetchMenu = async (setResinfo) => {

    // due to CORS issue
    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                const resMenueData = restaurantMenuMockData.menu.pl.data.data.cards
                resolve(resMenueData)
            }, 2000)
        })
    }
    
    const resMenueData = await getData();
    setResinfo(resMenueData)
    console.log('resMenueData1===>', resMenueData);
    return resMenueData;
}


const RestaurantMenu = () => {
    console.log('RestaurantMenu compo');
    const [ resInfo, setResinfo ] = useState(null);

    // rect router dom hook 
    const {resId} = useParams();
    console.log(resId);

    useEffect(() => {
        const resMenueData =  fetchMenu(setResinfo)
        console.log('resMenueData2===>', resMenueData);
        // setResinfo(resMenueData);
    }, [])

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
