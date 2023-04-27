import { useState, useEffect } from "react"
import { ABILITIES } from "../../GraphQL/Queries"
import { useQuery } from "@apollo/client"
import { postCharacter } from "../../../utils/backend"

function ChooseAbilityForm(props) {
    const { error, loading, data } = useQuery(ABILITIES)
    const [formOptions, setFormOptions] = useState([])
    
    useEffect(() => {
        if (data) {
           setFormOptions(data)
        }
    
    }, [data] )
    let abilityChoices = [8, 10, 12, 13, 14, 15]

    function handleChange(e) {
        
        props.setFormData({
            ...props.formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        postCharacter({...props.formData})
    }
    
 return(
    <section className="shadow row">
            <div>
                {formOptions.abilityScores && formOptions.abilityScores.map(ability => 
                    <>
                    <div className="border-b">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox"  />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" >
                                <span className="text-grey-darkest font-thin text-xl mx-auto">
                                    {ability.full_name}
                                </span>
                            </header>
                            <div className=" overflow-auto">
                                <div className="pl-8 pr-8 pb-5 text-grey-darkest"> 
                                
                                    <p>
                                    {ability.desc}
                                    </p>
                                    
                                    <br />
                                    
                                </div>
                                <select name={ability.index} onChange={handleChange}>
                                <option disabled selected value>--select--</option>
                                {abilityChoices.map(choice => 
                                        <option disabled={Object.values(props.formData).includes(`${choice}`)}>{choice}</option>
                                        )}
                                </select>
                            
                            </div>
                            <br />
                        </div>
                    </div>
                    </>

                    )}
                
            
            </div>
            <button onClick={handleSubmit}>Create</button>
        </section> 
 )
}

export default ChooseAbilityForm