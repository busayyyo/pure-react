import React from 'react';
import PropTypes from 'prop-types';


const CommitMessage = ({ commit }) => <span> {commit.message} </span> ;



CommitMessage.propTypes = {
    file: PropTypes.object.isRequired
};


export default CommitMessage;
