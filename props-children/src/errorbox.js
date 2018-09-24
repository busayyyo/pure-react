import React from 'react';
import './errorbox.css'

const ErrorBox = ({children}) => {
    return (
        <div className="container">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            {children}
        </div>
    );
}



export default ErrorBox;
