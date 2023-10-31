import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, FlagWidget, FlagOptions } from './components';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <FlagWidget/>
        <FlagOptions/>
      </>
    </BrowserRouter>
  
  )
}

export default App
