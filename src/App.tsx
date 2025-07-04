import { useState } from 'react'
import Person from './person';
import Car from './components/CarComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <h1>Hello from state vs props</h1>
        <Car name="maruti" color="red" />
        <Person />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}

export default App
