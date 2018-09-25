import React from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ task }) => (
    <div>
        {task}
    </div>
);

TaskList.propTypes = {
    task: PropTypes.array
};

export default TaskList;
