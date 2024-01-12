import { CDN_URL } from '../utils/constants'


const RestaurantCard = (props) => {
    const resData = props.resData.info
    return (
        <div className='res-card' >
            <img 
                className='res-logo'
                alt='res-logo'
                src={
                    CDN_URL + resData.cloudinaryImageId
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

export default RestaurantCard;