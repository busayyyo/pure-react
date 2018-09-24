import React from 'react';

//Write a component called LastChildOnly that only renders its last child.

const LastChildOnly = ( { children }) => {
    let items = React.Children.toArray(children);
    return(<div> {items.splice(-1)} </div>);
}

export default LastChildOnly;
