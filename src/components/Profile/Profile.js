import React from 'react';
import PropTypes from 'prop-types';

export default function Profile(props){
    return (
        <div className="profile">
            <div className="description">
                <img
                src={props.avatar}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="name">Name: {props.name}</p>
                <p className="tag">Tag: @{props.tag}</p>
                <p className="location">Location: {props.location}</p>
            </div>
            <ul className="stats">
                <li>
                <span className="label">Followers: </span>
                <span className="quantity">{props.stats.followers}</span>
                </li>
                <li>
                <span className="label">Views: </span>
                <span className="quantity">{props.stats.views}</span>
                </li>
                <li>
                <span className="label">Likes: </span>
                <span className="quantity">{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
  }