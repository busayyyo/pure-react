import React from 'react';

//Create a component named Tail that takes a number and renders the last N children.
const Tail = ({ number, children }) => {
    let items = React.Children.toArray(children);

    return (items.splice(-number));
}


export default Tail;
