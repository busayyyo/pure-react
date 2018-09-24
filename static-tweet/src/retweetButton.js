import React from "react";
import PropTypes from 'prop-types';

const RetweetButton = ({ count }) => (
        <i className="fa fa-retweet retweet-button">
        {count > 0 && <span className="count">{count}</span>}
        </i>
);

RetweetButton.propTypes = {
    count: PropTypes.number.isRequired
}

export default RetweetButton;
