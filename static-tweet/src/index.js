import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import TweetWrapper from './tweetWrapper';

const Tweet = ( { tweets }) => {
    return (

        <div className="container">
                {tweets.map(tweet => (
                <TweetWrapper key={tweet.id} tweet={tweet}/>
                ))}
        </div>

    );
};

Tweet.propTypes = {
    tweets: PropTypes.array
}

const tweetObject = [
    {
        id: 1,
        name: 'Adesuwa Y.',
        handle: 'ade_suwa',
        time: '2018-09-23 21:28:00',
        tweetMessage: 'You wont believe what happened today',
        likes: 5,
        retweet: 2,
    },
    {
        id: 2,
        name: 'Bolanle T.',
        handle: 'bola_t',
        time: '2018-09-23 21:24:00',
        tweetMessage: 'Today is a good day',
        likes: 15,
        retweet: 12,
    },
    {
        id: 3,
        name: 'April J.',
        handle: 'april_love',
        time: '2018-09-23 19:24:00',
        tweetMessage: 'James Baldwin once said...',
        likes: 3,
        retweet: 10,
    },
    {
        id: 4,
        name: 'James E.',
        handle: 'jamey_boy',
        time: '2018-09-23 21:24:00',
        tweetMessage: `Can't wait for friday`,
        likes: 0,
        retweet: 2,
    }

]








ReactDOM.render(<Tweet tweets={tweetObject}/>, document.getElementById('root'));

