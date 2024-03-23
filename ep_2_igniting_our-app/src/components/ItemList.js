import { CDN_URL } from "../utils/constants";


export const ItemList = ({ item }) => {
    console.log('Itemlsit===>', item);
    return (
        <div>
            {
                item.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price / 100}</span>
                            </div>
                            <p className="test-xs" >Item description</p>    
                        </div>
                        <div className="w-3/12 p-4">
                            <img src= {CDN_URL + item.card.info.imageId} className="w-14 h-auto" />    
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;