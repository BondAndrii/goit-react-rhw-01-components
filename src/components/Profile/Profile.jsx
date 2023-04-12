import React from "react";



export const Profile = ({ props }) => {
    console.log("in Profile", props);
    return (
        <div>
            <p>{props.username}</p>
       </div>
    )
}