import React from 'react'
const User = ({offerText,name,city,street}) => {
    return(
        <div>
            <span>
                {offerText} - 
                {city} - 
                {street}
            </span>
            <span>
            <button>edit</button>
            <button>delete</button>
            </span>
        </div>
    )


}
export default User