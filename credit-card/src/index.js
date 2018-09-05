import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const cardInfo = {
    name: 'Jon Snow',
    exp: '08/17',
    cardNum: '1234 5678 8901 2345',
    bankName: 'Exotic Bank Inc'
}


function CreditCard( { cardInfo } ) {
    return(
        <div className="wrapper">
            <BankName bank={cardInfo.bankName}/>
            <CardNumber number={cardInfo.cardNum}/>
            <ExpiryDate date={cardInfo.exp}/>
            <CardName name={cardInfo.name}/>
        </div>
    );
}

const BankName = ({ bank }) => <div className="bank-name"> {bank} </div>
const CardNumber = ({ number }) => <div className="card-num"> {number} </div>
const ExpiryDate = ( { date }) => <div className="exp-date"> <div className="valid">VALID <br/> THRU</div> {date} </div>
const CardName = ( { name }) => <div className="card-name"> {name.toLocaleUpperCase()} </div>

ReactDOM.render(<CreditCard cardInfo={cardInfo}/>, document.getElementById('root'));

