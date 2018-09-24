import React from "react";
import moment from 'moment';

const Time = ({ tweet }) => (
    <span className="time"> {moment(tweet.time).fromNow()}</span>
);

export default Time;
