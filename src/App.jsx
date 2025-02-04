import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Post from './Post'
import RightBar from './RightBar'

function App() {
  

  return (
   <div>
   <Header/>
    <SideBar/>
    <Post/>
    <RightBar/>
  
      
   
   </div>
  )
}

export default App
