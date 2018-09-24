import React from 'react';

//Create a component named Head that takes a number prop,and renders the first[number]
// children. e.g. If you pass number=3, and 7 child elements, it will render the first 3.


const Head = ( { number, children }) => {
    let items = React.Children.toArray(children);

    return (items.splice(0, number));
}

export default Head;
