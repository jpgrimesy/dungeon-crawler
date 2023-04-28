import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { allCharacters, deleteCharacter } from "../../../utils/backend";
import { Link } from "react-router-dom";

export default function User() {
   
    const [characters, setCharacters] = useState([])
    
    useEffect(()=> {
        allCharacters().then(characters => setCharacters(characters))
    })

    function handleDelete(e) {
        e.preventDefault()
        deleteCharacter(e.target.id)
    }
 
    return (
  
        <div class="flex flex-col justify-center items-center ">
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-2xl shadow-shadow-500 ">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold ">
                    Your Characters
                    </h4>
                </div> 
                {characters && characters.map(character =>
                    <Link className="grid grid-cols-1 gap-4 p-3 w-full" to={`/character/${character._id}`}>
                    <div class="grid grid-cols-1 gap-4 p-3 w-full">
                        <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-xl shadow-shadow-500 ">
                        <p class="text-sm text-gray-600">{character.race} {character.class}</p>
                        <p class="text-base font-medium text-navy-700">
                            {character.name}
                        </p><button id={character._id}>Edit</button>
                        <button className=""id={character._id} onClick={handleDelete}>Delete</button>
                        </div>
                        
                    </div>
                    </Link>
                    )}
                
                    
               
            </div>  
            </div>
                
       
    )

}