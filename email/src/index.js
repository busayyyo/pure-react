import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const emailProp = {
    sender: "React Newsletter",
    subject: "React Newsletter Issue 36",
    date: "July 15",
    message: "Artisan shoreditch lyft fixie edison bulb. Stumptown gluten-free chartreuse, cardigan gentrify put a bird on it irony forage taxidermy asymmetrical."
}
function Email( {email} ) {
    return (
        <div className="container">
            <div className="wrapper">

                <div className="heading">
                    <Sender className="sender" sender={email.sender}/>
                    <Subject className="subject" subject={email.subject}/>
                    <Date className="date" date={email.date}/>
                </div>

                <div className="content">
                <span className="icons">
                    <input type="checkbox" name="email" />
                    <span><i className="fa fa-thumb-tack" aria-hidden="true"></i></span>
                </span>
                <Message className="message" message={email.message} />

                </div>
            </div>

        </div>
    );
}

const Sender = ( { sender }) => <span> {sender} </span>
const Subject = ( { subject }) => <span> {subject} </span>
const Date = ( {date} ) => <span> {date} </span>
const Message = ( {message} ) => <span> {message} </span>

ReactDOM.render(<Email email={emailProp}/>, document.getElementById('root'));
