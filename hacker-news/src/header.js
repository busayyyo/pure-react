import React from 'react';


function Header () {
    return(
        <header className="header">
                <i className="fa fa-hacker-news fa-2x" aria-hidden="true"></i>
            <nav>
                <span>Hacker News</span>
                <a href="#"> new</a>
                <a href="#"> threads</a>
                <a href="#"> comments</a>
                <a href="#"> show</a>
                <a href="#"> ask</a>
                <a href="#"> jobs</a>
                <a href="#"> submit</a>
            </nav>
        </header>
    );
}


export default Header;
