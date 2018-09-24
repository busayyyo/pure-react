import React from "react";
import PropTypes from 'prop-types'

const LikeButton = ({ count }) => (
            <i className="fa fa-heart ">
            {count > 0 && <span className="count"> {count} </span>}
            </i>
);


LikeButton.PropTypes = {
    count: PropTypes.number.isRequired
}

export default LikeButton;
