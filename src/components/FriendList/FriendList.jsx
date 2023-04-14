import React from "react";

export const FriendList = ({friends}) => {
    
    return (
        <ul>
            {friends.map(({ id, name, avatar, isOnline }) => {
                const bgcolor = () => {
                    return (
                        isOnline ? "red" : "green"
                    )
                }
                return (
                    <li key={id}>
                        <span style={
                            {
                                display:"inline-block",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                 backgroundColor: bgcolor(),
                            }
                                }
                           ></span>
                        <img src={avatar} alt={name} />
                        <p>{name}</p>
                        
                    </li>
                )
            })}
        </ul>
    )
}