import React from 'react';
import PropTypes from 'prop-types';
import TaskHeader from "./taskHeader";
import TaskList from './taskList';
import InputTask from './inputTask';

const TaskBoard = ({ list }) => (
    <div className="task-board">
        <TaskHeader header={list.header}/>
        <TaskList task={list.taskList.map((task, index) => (
                <div className="task-list" key={index}>
                 {task}
                </div>
        ))} />

        <InputTask/>
    </div>
);

TaskBoard.protoTypes = {
    list: PropTypes.object.isRequired
};

export default TaskBoard;
