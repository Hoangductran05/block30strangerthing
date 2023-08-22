/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Postcard ({post}) {
    const {_id, title, message, description, price, author, username, location} = post;
    return (
        <div key={_id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{message}</p>
            <p>{price}</p>
            <p>{location}</p>
            
        </div>
    )
}