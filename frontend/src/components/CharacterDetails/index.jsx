import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { characterDetails } from "../../../utils/backend";
import GQLDetails from "../GQLDetails";


function CharacterDetails(props) { 
    const [character, setCharacter] = useState()
    const { id } = useParams()
   
    useEffect(() => {
        
        characterDetails(id).then(character => setCharacter(character))
    
    }, [])

    return (
        <>
        {character && 
        <>
        <p className="text-4xl">{character.name}</p>
        <p className="text-2xl">{character.race} {character.class}</p>
        <GQLDetails race={character.race} class={character.class} character={character} />
        </>
        }
        
        </>
    )
}

export default CharacterDetails