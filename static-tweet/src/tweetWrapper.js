import React from 'react';
import PropTypes from 'prop-types';
import Name from './nameWithHandle';
import Handle from './handle';
import Message from './message';
import Time from './time';
import ReplyButton from "./replyButton";
import RetweetButton from "./retweetButton";
import LikeButton from "./likeButton";
import MoreOptionsButton from "./moreOptions";
import Avatar from './avatar';

const TweetWrapper = ({ tweet }) => (
    <div className="tweet-wrapper">
        <div className="content">
            <Avatar/>
            <div className="tweet-top">
                <div>
                    <Name tweet={tweet}/>
                    <Handle tweet={tweet}/>
                    <Time tweet={tweet}/>
                </div>
                <Message tweet={tweet}/>
            </div>
        </div>

        <div className="buttons">
            <ReplyButton />
            <RetweetButton count ={tweet.retweet}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton />
        </div>
    </div>


);

TweetWrapper.propTypes = {
    tweet: PropTypes.object.isRequired
};

export default TweetWrapper;


