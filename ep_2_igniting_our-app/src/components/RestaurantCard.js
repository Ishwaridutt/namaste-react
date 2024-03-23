import { CDN_URL } from '../utils/constants'


const RestaurantCard = (props) => {
    const resData = props.resData.info
    return (
        // dynamic classes in tailwind, for using your own certain size
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300' >
            <img 
                className='rounded-lg'
                alt='res-logo'
                src={
                    CDN_URL + resData.cloudinaryImageId
                }
            />
            <h3 className='font-bold py-4 text-lg' >{resData.name}</h3>
            <h3>{resData.cuisines.join(', ')}</h3>
            <h3>{resData.avgRating}</h3>
            <h3>{resData.costForTwo}</h3>
            <h3>{resData.sla.deliveryTime}</h3>
        </div>
    )
}


// higher order component
export const withPromotedLabel = (RestaurantCard1) => {
    // will recieve props here because this function is returned
    console.log('in promoted label res card');
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-3 p-3 rounded-lg' >
                    Promoted
                </label>
                <RestaurantCard1 {...props} />
            </div>
        )
    }
}

export default RestaurantCard;