import React from 'react';
import PropTypes from 'prop-types';
import Headline from './headline';
import Reactions from './reactions';

const NewsBoard = ({ news }) => (
        <div className="news-board">
            <Headline heading={news}/>
            <Reactions news={news}/>
        </div>
    );

NewsBoard.propTypes = {
    news: PropTypes.object.isRequired
};


export default NewsBoard;
