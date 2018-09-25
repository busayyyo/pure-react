import React from 'react';
import moment from 'moment';

const Time = ({ time }) => (
    <span> {moment(time.time). fromNow()} </span>
);

export default Time;
