import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { RACES } from "../../GraphQL/Queries";
import './styles.css' 


function ChooseRaceForm(props) {
    const navigate = useNavigate()
    const { error, loading, data } = useQuery(RACES)
    const [formOptions, setFormOptions] = useState([])

    useEffect(() => {
        if (data) {
           setFormOptions(data)
        }
    
    }, [data] )
    

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error somewhere</div>
    }

    function handleRaceSelect(e) {
        e.preventDefault()
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value
        })

    }

    return (
       <section className="shadow row">
                <div className="tabs">
            {formOptions.races  && formOptions.races.map(race =>
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                            <span className="text-grey-darkest font-thin text-xl">
                                {race.name}
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* <!-- icon by feathericons.com --> */}
                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ul className="pl-4">
                                    {race.traits.map( trait => 
                                        <>
            
                                         <li className="pb-1">
                                            {trait.name}
                                        </li>
                                        <li class="pb-2 text-sm">
                                            {trait.desc[0]}
                                        </li>
                                        {trait.proficiency_choices &&
                                        <>
                                        <li>Please Choose</li>
                                        <select name={trait.proficiency_choices.type} id={trait.proficiency_choices.type}>
                                            {trait.proficiency_choices.from.options.map(option =>
                                                <option>{option.item.name}</option>
                                                )}
                                        </select>
                                        <br />
                                        </>
                                        }
                                        {trait.proficiency_choices && trait.proficiency_choices.choose > 1 && 
                                        <>
                                        <li>Please Choose</li>
                                        <select name={trait.proficiency_choices.type}>
                                            {trait.proficiency_choices.from.options.map(option =>
                                                <option>{option.item.name}</option>
                                                )}
                                        </select>
                                        <br />
                                        </>}
                                        <br />
                                        </>
                                        )}
                                     
                                        <li className="pb-1">
                                            Languages
                                        </li>
                                        <li className="pb-2 text-sm">
                                            {race.language_desc}
                                        </li>
                                        <br />
                                        {race.language_options && 
                                            <>
                                            <li>Choose Language:</li>
                                            <select name="language" id="language">
                                                <option>Please Choose</option>
                                                {race.language_options.from.options.map(language =>
                                                    <option>{language.item.name}</option>
                                                    )}
                                              
                                            </select>
                                            </>
                                        }
                                </ul>
                                <button onClick={handleRaceSelect} value={race.index} name='race' className="px-8 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">Choose Race</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            
            </div>
            </section> 
    )
    
}

export default ChooseRaceForm