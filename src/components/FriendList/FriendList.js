import React from 'react';
import './style.css';

export default function FriendList(props){
    return (
        <ul className="friend-list">
            {props.friends.map(({id,name,avatar,isOnline}) =>  
            <li className="item" key={id}>
                {isOnline ? ( <span className="status-online">online</span>) : ( <span className="status-offline">offline</span>)}
                <img className="avatar" src={avatar} alt="avatar" width="48" />
                <p className="name">{name}</p>
            </li>)}
        </ul>
    );
};