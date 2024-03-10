
import { useState } from 'react'
import './App.css'
import Posts from './Post'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h3>React core concept</h3>
     <ol>
      <li>Componets</li>
      <li>Jsx</li>
      <li>Props</li>
      <li>Event Handler</li>
      <li>State</li>
      <li>Data load</li>
     </ol>
     <hr />
     <Posts></Posts>
    </>
  )
}

export default App
