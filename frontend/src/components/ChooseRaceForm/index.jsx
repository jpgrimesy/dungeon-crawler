import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { RACES } from "../../GraphQL/Queries";
import './styles.css' 


function ChooseRaceForm(props) {
    const { error, loading, data } = useQuery(RACES)
    const [formOptions, setFormOptions] = useState([])
    const [proficiencies, setProficiencies] = useState([])
    const [language, setLanguage] = useState([])

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
        if(language) {
            props.setFormData({
                ...props.formData,
                [e.target.name]: e.target.id,
                proficiencies: proficiencies,
                languages: language
            })
        } else {
          props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.id,
            proficiencies: proficiencies
        })  
        }
    }

    function handleChange(e) {
        if (!proficiencies.includes(e.target.value)) {
            setProficiencies([...proficiencies, e.target.value])
        }
    }

    function handleLanguage(e) {
        setLanguage(e.target.value)
    }

    return (
       <section className="shadow  row">
                <div className="tabs">
            {formOptions.races  && formOptions.races.map(race =>
                <div key={race.index} className="border-b bg-white tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                            <span className="text-grey-darkest font-thin text-xl">
                                {race.name}
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* <!-- icon by feathericons.com --> */}
                                <svg aria-hidden="true" data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                <ul className="pl-4">
                                    {race.traits.map( trait => 
                                        <article key={trait.index}>
                                        <li className="pb-1">
                                            {trait.name}
                                        </li>
                                        <li className="pb-2 text-sm">
                                            {trait.desc[0]}
                                        </li>
                                        {trait.proficiency_choices &&
                                        <>
                                        <li>Please Choose</li>
                                        <select onChange={handleChange} name={trait.proficiency_choices.type} id={trait.proficiency_choices.type} defaultValue="Please Select">
                                            <option disabled>Please Select</option>
                                            {trait.proficiency_choices.from.options.map(option =>
                                                <option key={option.item.index}>{option.item.name}</option>
                                                )}
                                        </select>
                                        <br />
                                        </>
                                        }
                                        {trait.proficiency_choices && trait.proficiency_choices.choose > 1 && 
                                        <>
                                        <li>Please Choose</li>
                                        <select onChange={handleChange} name={trait.proficiency_choices.type} defaultValue="Please Select">
                                            <option disabled>Please Select</option>
                                            {trait.proficiency_choices.from.options.map(option =>
                                                <option key={option.item.index}>{option.item.name}</option>
                                                )}
                                        </select>
                                        <br />
                                        </>}
                                        <br />
                                        </article>
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
                                            <select onChange={handleLanguage} name="language" id="language" defaultValue="Please Select">
                                            <option disabled>Please Select</option>

                                                {race.language_options.from.options.map(language =>
                                                    <option key={language.item.index}>{language.item.name}</option>
                                                    )}
                                              
                                            </select>
                                            </>
                                        }
                                </ul>
                                <button onClick={handleRaceSelect} id={race.index} name='race' className="px-8 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">Choose Race</button>
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