import React from 'react';
import Time from './time';

const Reactions = ({ news }) => {
    return (
        <div className="reactions">
            <span className="statement">
                <Points points={news}/> by <Username username={news}/> <Time time={news}/>
            </span>
            <span>
                <Flag/>
                <Hide/>
                 <Comments comment={news}/>
                <InstaPaper/>
                <SaveToPocket/>
            </span>
        </div>
    );
};

const Points = ({ points }) => <span>{`${points.points} points`}</span>;
const Username = ({ username }) => <span>{username.username}</span>;
const Comments = ({ comment }) => <span className="comment">{`${comment.comments} comments`}</span>;

function Flag () {
    return (
       <span className="flag">flag</span>
    );
}

function Hide () {
    return (
        <span className="hide">hide</span>
    );
}

function InstaPaper () {
    return (
        <span className="insta-paper">Instapaper</span>
    );
}


function SaveToPocket () {
    return (
        <span className="save-to-pocket">save to pocket</span>
    );
}




export default Reactions;
