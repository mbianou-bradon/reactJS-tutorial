import React from 'react';

export default function Navbar(){
    return (
        <nav className='nav-bar'>
            <div className='nav-brand'>
                <div className='nav-logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><g fill="none" stroke="currentColor"><path d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3s3.134-3 7-3s7 1.343 7 3Z"/><path d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726c1.841-3.4 2.153-6.795.696-7.584c-1.457-.79-4.13 1.327-5.972 4.726c-1.841 3.4-2.153 6.795-.696 7.584Z"/><path d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726c-1.841-3.4-2.153-6.795-.696-7.584c1.457-.79 4.13 1.327 5.972 4.726c1.841 3.4 2.153 6.795.696 7.584Z"/><path d="M6.5 7.584a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"/></g></svg>
                </div>
                <h2>ReactFacts</h2>
            </div>
                <p>React Course - Project 1</p>
        </nav>
    )
}