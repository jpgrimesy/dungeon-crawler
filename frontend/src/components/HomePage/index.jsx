import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="flex h-screen w-full items-center justify-center text-white" >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <p className="text-4xl text-center">Welcome to Dungeon Crawlers</p>
                <br />
                <p>Here you can create and store all your Dungeon & Dragons(5e) characters!</p>
                <br />
                <p className="text-center">Why hesitate? <Link className="underline" to="/auth/signup">Sign up</Link> now!</p>
            </div>
        </div>
    )
}

export default HomePage