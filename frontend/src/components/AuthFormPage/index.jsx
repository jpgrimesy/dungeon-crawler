import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend";

export default function AuthFormPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { formType } = useParams()
    const navigate = useNavigate()

    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'

    async function handleSubmit(event) {
        event.preventDefault()

        if (formType === 'login') {
            const { token } = await logIn(formData)
            localStorage.setItem('userToken', token)
        } else {
            const { token } = await signUp(formData)
            localStorage.setItem('userToken', token)
        }
        navigate('/user')
        location.reload()
    }

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div class="flex h-screen w-full items-center justify-center" >
            <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div class="text-white">
                <div class="mb-8 flex flex-col items-center">
                <h1 class="mb-2 text-2xl">{actionText}</h1>
                <span class="text-gray-300">Enter Login Details</span>
                </div>
                <form action="#">
                <div class="mb-4 text-lg">
                    <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={handleInputChange}
                    />
                </div>
        
                <div class="mb-4 text-lg">
                    <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" 
                    id="password"
                    name="password"
                    type="password"
                    minLength="6"
                    required
                    placeholder="Password"
                    onChange={handleInputChange}
                    />
                </div>
                <div class="mt-8 flex justify-center text-lg text-black">
                    <button type="submit" onClick={handleSubmit} class="rounded-3xl bg-red-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">{actionText}</button>
                </div> 
                </form>
            </div>
            </div>
        </div>
   );
}
