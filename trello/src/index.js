import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskBoard from './taskBoard';

const TrelloBoard = ({ lists }) => {
    return (
        <div className="trello-board">
            {lists.map((list) => (<TaskBoard key={list.id} list={list}/>))}
        </div>
    );
};


const boardList = [
    {
        id: 1,
        header: 'Phone feature',
        taskList: [
             'design phone',
            'user interview',
            'info archie',
            'build phone',
            'test phone',
        ],
    },

    {
        id: 2,
        header: 'Fruit Design',
        taskList: [
            'gather fruits',
            'pick one',
            'set on table',
            'draw',
        ],
    },

    {
        id: 3,
        header: 'Wedding',
        taskList: [
            'buy a dress',
            'pick a venue',
            'invite guests',
        ],
    }
];

ReactDOM.render(<TrelloBoard lists={boardList}/>, document.getElementById('root'));

