import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import Body from './Body.jsx'
import Search from './Search.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <div>
      <NavBar />
      <Search/>
      <Body topic="High Yield"/>
      <Body topic="Low Maintanence"/>
      <Footer/>
    </div>
  )
}

export default App
