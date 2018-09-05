import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const demotivationalPoster = {
    url: "http://res.cloudinary.com/busayyyo/image/upload/v1536155399/unique_fork_fgs3e3.jpg",
    title: 'UNIQUE',
    text: 'just because you are unique does not mean you are useful'
}
function Poster({image, title, text}) {
    return (

        <div className="wrapper">
            <img src={ image } alt="fork" />
            <div className="title"> {title} </div>
            <div className="text"> {text}</div>
        </div>

    );
}

ReactDOM.render(<Poster image={demotivationalPoster.url} title={demotivationalPoster.title} text={demotivationalPoster.text}/>, document.getElementById('root'));


