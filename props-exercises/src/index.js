import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const fakePerson = {
    firstname : 'Bello',
    lastname: 'John',
    streetNumber: 123,
    streetName: 'Addison',
    city: 'Dusseldorf',
    cityCode: 'DU',
    postalCode: 1234
}

function AddressLabel( {person} ) {
return(
    <div className="container">
        <FullName firstName={person.firstname} lastName={person.lastname}/>
        <Street strNum={person.streetNumber} strName={person.streetName} />
        <City city={person.city} code={person.cityCode} pcode={person.postalCode}/>
    </div>
);
}


const FullName = ( {firstName, lastName} ) => <div className="name">{firstName} {lastName}</div>



const Street =( {strNum, strName} ) => <div className="street"> {strNum} {strName} st </div>


const City = ( {city, code, pcode}) => <div className="city">{city} {code} {pcode}</div>



ReactDOM.render(<AddressLabel person={fakePerson}/>, document.getElementById('root'));

