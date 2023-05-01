import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import User from '../User'
import AuthFormPage from '../AuthFormPage'
import CharCreationForm from '../CharCreationForm'
import CharacterDetails from '../CharacterDetails'
import HomePage from '../HomePage'
import dcLogo from '../../assets/dc-logo.png'

function App() {
  const navigate = useNavigate()
  const [toggleMenu, setToggle] = useState(false)
  const [visibility, setVisibility] = useState('collapse')

  function logout() {
    localStorage.removeItem('userToken')
    navigate('/')
    location.reload()
  }

  function toggleHamburger() {
    setToggle(!toggleMenu)
    setVisibility(toggleMenu ? 'visible' : 'collapse')
  }

  return (
    <>
    <nav id="header" className="w-full z-30 top-10 py-1 bg-slate-950 shadow-lg border-b border-red-400 mt-0">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg onClick={toggleHamburger} className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle" />
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                  {localStorage.userToken ?
                  <>
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/user">Profile</Link></li>
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/create-character">Create Character</Link></li>
                  </>:
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</Link></li>
                  }
                </ul>
            </nav>
         </div>
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex text-xl items-center w-full md:w-full">
               <img className='w-60' src={dcLogo} />
            </div>
         </div>
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
                {!localStorage.userToken ? <><Link className="bg-transparent text-white  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700" to="/auth/login">Log in</Link>
               <Link className="bg-red-700 text-gray-200  p-2 rounded  hover:bg-red-500 hover:text-gray-100" to="/auth/signup">Sign up</Link></> :
               <Link className="text-white" onClick={logout}>Logout</Link>}
            </div>
         </div>
      </div>
    </nav>
    <div className={`${visibility} ml-5 lg:invisible md:flex md:items-center md:w-auto w-full order-3 md:order-1`}>
            <nav>
               <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                  {localStorage.userToken ?
                  <>
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/user">Profile</Link></li>
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/create-character">Create Character</Link></li>
                  </>:
                  <li><Link className="inline-block no-underline hover:text-red-500 font-medium text-lg py-2 px-4 lg:-ml-2" to="/">Home</Link></li>
                  }
                </ul>
            </nav>
         </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/:formType" element={<AuthFormPage />} />
      <Route path="/create-character" element={<CharCreationForm />} />
      <Route path="/user" element={<User />} />
      <Route path="/character/:id" element={<CharacterDetails />}/>
    </Routes>
    </>
  )
}

export default App
