import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to FRONTEND class in KLU</h1>
      <h2>Today's topic is Introduction to React</h2>
      <h3>Today's Date is 29.07.2025</h3>
      <h3>2400030198-GAGAN</h3>
      <Link to="/Page1">Go To Page1</Link>
      <br/><br/><br/>
      <Link to="/Page2">Go To Page2</Link>
      <br/><br/><br/>
      <Link to="/Page3">Go To Page3</Link>
      <br/><br/><br/>
      <Link to="/Page4">Go To Page4</Link>

    </>
  )
}

export default App
