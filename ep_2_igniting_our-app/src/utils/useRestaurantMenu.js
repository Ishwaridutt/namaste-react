import { useEffect, useState } from "react";
import { restaurantMenuMockData } from "../utils/restMenuData";

const fetchMenu = async (resId, setResinfo) => {
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

// custom hook
const useRestaurantMenu = (resId) => {
    console.log('useRestaurantMenu custom hook');
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu(resId, setResInfo);
    }, [])

    return resInfo;
}

export default useRestaurantMenu;







