import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBox from './errorbox';
import FirstChildOnly from "./FirstChildOnly";
import LastChildOnly from "./lastChildOnly";
import Head from "./head";
import Tail from "./tail";


function PropsChildren() {
    return (
        <div>
            <ErrorBox> The world has gone mad </ErrorBox>

            <FirstChildOnly>
                <p> yes, this is wonderful</p>
                <span>no, this isn't working </span>
            </FirstChildOnly>

            <LastChildOnly>
                <p> yes, this is wonderful</p>
                <span>no, this isn't working </span>
                <span> maybe this works</span>
            </LastChildOnly>

            <Head number={4}>
                <p> yes, this is wonderful</p>
                <span>no, this isn't working </span>
                <span> maybe this works</span>
                <p> yes, this is wonderful</p>
                <span>no, this isn't working </span>
                <span> maybe this works</span>
            </Head>

            <Tail number={2}>
                <p> another </p>
                <span>message </span>
                <span> cos</span>
                <p> this is getting</p>
                <div>too boring</div>
                <div> and identical</div>
            </Tail>

        </div>
    );
}



ReactDOM.render(<PropsChildren />, document.getElementById('root'));

