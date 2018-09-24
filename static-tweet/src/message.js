import React from "react";

const Message = ({ tweet }) => {
    return (
        <span className="message">
            {tweet.tweetMessage}
        </span>
    );
};

export default Message;
