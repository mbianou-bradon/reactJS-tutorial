import React from 'react'
import './Header.module.css'

export default function Header() {
  return (
    <nav>
        <div><img src="./assets/logo.png" alt="" height={'35rem'}/></div>
        <h1 className='nav-brand'>Memes Generator</h1>
        <h2>React Course - Project 3</h2>
    </nav>
  )
}
