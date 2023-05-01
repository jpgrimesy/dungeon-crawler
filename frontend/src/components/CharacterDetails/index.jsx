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
            <GQLDetails race={character.race} class={character.class} character={character} />
        }
        </>
    )
}

export default CharacterDetails