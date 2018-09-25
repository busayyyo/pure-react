import React from 'react';
import PropTypes from 'prop-types';

const TaskHeader = ({ header }) => (
    <div className="task-header">
        <div className="header">{header}</div>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
);


TaskHeader.propTypes = {
    header: PropTypes.string
};

export default TaskHeader
