import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const fakePerson = {
    sender: {
        firstname: 'Sender',
        lastname: 'John',
        streetNumber: 123,
        streetName: 'Addison',
        city: 'Dusseldorf',
        cityCode: 'DU',
        postalCode: 12348
    },
    receiver: {
        firstname: 'Receiver',
        lastname: 'Tucker',
        streetNumber: 46,
        streetName: 'Grayson',
        city: 'Los Angeles',
        cityCode: 'LA',
        postalCode: 57890
    }
}



function Envelope ({toPerson, fromPerson}) {
    return(
       <div className="container">
           <div className="sender">
               <FullName firstName={toPerson.firstname} lastName={toPerson.lastname}/>
               <Street strNum={toPerson.streetNumber} strName={toPerson.streetName} />
               <City city={toPerson.city} code={toPerson.cityCode} pcode={toPerson.postalCode}/>

           </div>

           <div className="receiver">
               <FullName firstName={fromPerson.firstname} lastName={fromPerson.lastname}/>
               <Street strNum={fromPerson.streetNumber} strName={fromPerson.streetName} />
               <City city={fromPerson.city} code={fromPerson.cityCode} pcode={fromPerson.postalCode}/>
           </div>
           <div className="stamp-wrapper">
               <div className="stamp">STAMP</div>
           </div>
       </div>
    );
}

const FullName = ( {firstName, lastName} ) => <div className="name">{firstName} {lastName}</div>


const Street =( {strNum, strName} ) => <div className="street"> {strNum} {strName} st </div>


const City = ( {city, code, pcode}) => <div className="city">{city} {code} {pcode}</div>

ReactDOM.render(<Envelope toPerson={fakePerson.sender} fromPerson={fakePerson.receiver}/>, document.getElementById('root'));

