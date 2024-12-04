import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import AddContact from './views/AddContact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpDateContact from './views/UpDateContact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/updatecontact/:idContact" element={<UpDateContact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
