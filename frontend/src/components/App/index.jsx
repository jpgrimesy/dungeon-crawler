import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Test from '../User'
import AuthFormPage from '../AuthFormPage'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="text-center">
      <li>
              <Link to="/auth/signup">
                <h4 className="px-3 py-2 hover:text-white">Sign Up</h4>
              </Link>
            </li>
            <li>
              <Link to="/auth/login">
                <h4 className="px-3 py-2 hover:text-white">Log In</h4>
              </Link>
            </li>
      <Routes>
        <Route path="/auth/:formType" element={<AuthFormPage />} />
      </Routes>

      
      <Test />
     
    </div>

  )
}

export default App
