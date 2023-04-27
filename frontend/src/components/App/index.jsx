import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Test from '../User'
import AuthFormPage from '../AuthFormPage'
import CharCreationForm from '../CharCreationForm'

function App() {
  
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
            <li>
              <Link to="/create-character">
                <h4 className="px-3 py-2 hover:text-white">Create Character</h4>
              </Link>
            </li>
      <Routes>
        <Route path="/auth/:formType" element={<AuthFormPage />} />
        <Route path="/create-character" element={<CharCreationForm />} />
      </Routes>

      
    
     
    </div>

  )
}

export default App
