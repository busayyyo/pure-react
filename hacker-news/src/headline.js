import React from 'react';
import PropTypes from 'prop-types';

const Headline = ({ heading }) => (
    <div className="headline">
        <span className="number">{`${heading.id}.`}</span>
        <i className="fa fa-caret-up" aria-hidden="true"></i>
        <span className="heading"> {heading.headline} </span>
        <span className="source"> {`(${heading.source})`}</span>
    </div>
);

Headline.PropTypes = {
    heading: PropTypes.object.isRequired
};

export default Headline;
