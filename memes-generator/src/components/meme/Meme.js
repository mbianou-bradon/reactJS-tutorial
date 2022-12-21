import React from 'react'
import "./meme.module.css"
import memeData from '../../memeData'

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage () {
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const path = memesArray[randomNumber].path
    setMemeImage(path)
    console.log(path)
  };

  return (

    <main>
        <form>
            <input type="text" placeholder='Top text'/>
            <input type="text" placeholder='Bottom text'/>
        </form>
        <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
       
    </main>
  )
}
