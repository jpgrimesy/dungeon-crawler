import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import User from '../User'
import AuthFormPage from '../AuthFormPage'
import CharCreationForm from '../CharCreationForm'
import CharacterDetails from '../CharacterDetails'

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
            <Link to='/user'>Profile</Link>
      <Routes>
        <Route path="/auth/:formType" element={<AuthFormPage />} />
        <Route path="/create-character" element={<CharCreationForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/character/:id" element={<CharacterDetails />}/>
      </Routes>

      
    
     
    </div>

  )
}

export default App
