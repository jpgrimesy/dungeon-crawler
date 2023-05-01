import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { allCharacters, deleteCharacter } from "../../../utils/backend";
import { Link } from "react-router-dom";
import { EDIT_CHOICES } from "../../GraphQL/Queries";
import { editCharacter } from "../../../utils/backend";

export default function User() {
    const { data, loading , error } = useQuery(EDIT_CHOICES)
    const [characters, setCharacters] = useState([])
    const [toggleEditForm, setToggle] = useState(false)
    const [choices, setChoices] = useState()
    const [editIndex, setIndex] = useState()
    const [editFormData, setEditFormData] = useState([])

    useEffect(() => {
        setChoices(data)
    }, [data])
    useEffect(()=> {
        allCharacters().then(characters => setCharacters(characters))
    }, [])

    function refreshCharacters() {
        allCharacters().then(characters => setCharacters(characters))
    }

    function handleDelete(e) {
        e.preventDefault()
        deleteCharacter(e.target.id).then(()=>refreshCharacters())
    }
    
    function toggleForm(e) {
        e.preventDefault()
        setIndex(e.target.id)
        setToggle(!toggleEditForm)
    }
    
    function submitEdit(e) {
        e.preventDefault()
        editCharacter(editFormData, e.target.id).then(()=> refreshCharacters())
        setToggle(false)
    }

    function handleChange(e) {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto   bg-white bg-clip-border shadow-2xl shadow-shadow-500 ">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold ">
                    Your Characters
                    </h4>
                </div> 
                {characters && characters.map(character =>
                    <span className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-2xl shadow-shadow-500 " key={character._id}>
                        <Link className="grid grid-cols-1 gap-4 p-3 w-full" to={`/character/${character._id}`}>
                            <div className="grid grid-cols-1 gap-4 p-3 w-full">
                                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-xl shadow-shadow-500 ">
                                    <p className="text-sm text-gray-600">{character.race} {character.class}</p>
                                    <p className="text-base font-medium text-navy-700">
                                        {character.name}
                                    </p>
                                    <div className="flex-row mx-auto">
                                    <button type="button"
                                        className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline" onClick={toggleForm} id={character._id}>Edit</button>
                                    <button type="button"
                                        className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"id={character._id} onClick={handleDelete}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                 
                        {toggleEditForm && editIndex === character._id && 
                        <form>
                            <input className='mt-20 mb-5 class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full' onChange={handleChange} type="text" name="name" defaultValue={character.name} />
                            <br />
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange} name="race" defaultValue={character.race}>
                                {choices && choices.races.map(race =>
                                <option key={race.index} value={race.index}>{race.name}</option>
                                )
                                }
                            </select>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange} name="class" defaultValue={character.class}>
                                {choices && choices.classes.map(charClass =>
                                <option key={charClass.index} value={charClass.index}>{charClass.name}</option>
                                )
                                }
                            </select>
                            <br />
                                <button type="button"
                                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={submitEdit} id={character._id}>Submit</button>
                        </form>
                        }
                    </span>
                )}
            </div>  
        </div>
    )
}