import React from 'react'
import "./meme.module.css"

export default function Meme() {
  return (
    <main>
        <form>
            <input type="text" placeholder='Top text'/>
            <input type="text" placeholder='Bottom text'/>
        </form>
        <button>Get a new meme image</button>
       
    </main>
  )
}
