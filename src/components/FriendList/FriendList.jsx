import React from "react";

export const FriendList = ({friends}) => {
    
    return (
        <ul>
            {friends.map(({id, name, avatar, isOnline}) => {
                return (
                    <li key={id}>
                        <span></span>
                        <img src={avatar} alt={name} />
                        <p>{name}</p>
                        
                    </li>
                )
            })}
        </ul>
    )
}