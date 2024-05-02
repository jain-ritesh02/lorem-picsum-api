import React from 'react'
import Home from './Component/Home'

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 style={{fontFamily: "sans-serif"}}>Dive into the world of images</h1>
      <Home/>
      
    </div>
  )
}

export default App
