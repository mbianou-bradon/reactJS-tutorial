import React from 'react';
import backgroundImage from "../assets/react-logo-black-and-white.png"

export default function Main(){
    return (
        <main>
            <h1 className='header'>Fun facts about React</h1>

            <ul className='facts-items'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}