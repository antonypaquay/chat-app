import React from "react";
import './style.scss';

const Message = ({ user, message, isUser, time }) => {

    if (isUser(user)) {
        return (
            <div className="user__message">
                <span className="time">{time.hour}:{time.minutes}</span>
                <p>{message}</p>
            </div>
        )
    } else {
        return (
            <div className="not__user__message">
                <div className="user__img">
                    <img srcSet="https://via.placeholder.com/32x32" alt="user profil" />
                    <p>
                        <strong className="user__name">{user}: </strong>
                        <span>{message}</span>
                    </p>
                </div>
                <span className="time">{time.hour}:{time.minutes}</span>
            </div>
        )
    }

};

export default Message;
