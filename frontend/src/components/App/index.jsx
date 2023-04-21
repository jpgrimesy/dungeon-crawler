import { useState } from 'react'
import Test from '../User'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <Test />
    </div>

  )
}

export default App
