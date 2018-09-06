import React from 'react';

//Write a component called FirstChildOnly that accepts any number of children but only renders the first.

const FirstChildOnly = ({ children }) => {
    let items = React.Children.toArray(children);

    return (<div>{items[0]}</div>);
}





export default FirstChildOnly;
