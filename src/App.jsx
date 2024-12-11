import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddPet from './components/create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddPet/>
     
  
    </>
  )
}

export default App