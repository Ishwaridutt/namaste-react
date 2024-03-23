
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagory = ({data, showItem}) => {
    console.log('RestaurantCatagory ===>', data, showItem);

    const [showItems, setShowItems] = useState(showItem);
    const handleClick = () => {
        console.log('RestaurantCatagory item clicked');
        setShowItems(!showItems);
    }

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                </div>
                <div>
                    {/* Accordian Body */}
                    {showItems && <ItemList item = {data.itemCards} />}
                </div>
                
            </div>
        </div>
    )
}

export default RestaurantCatagory;