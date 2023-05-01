import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CLASSES } from "../../GraphQL/Queries";
import './styles.css' 



function ChooseClassForm(props) {
    const navigate = useNavigate()
    const { error, loading, data } = useQuery(CLASSES)
    const [formOptions, setFormOptions] = useState([])
    const [proficiencies, setProficiencies] = useState([])

    useEffect(() => {
        if (data) {
           setFormOptions(data)
        }
    }, [data] )
    
    if (error) {
        return <div>Error somewhere</div>
    }

    function handleClassSelect(e) {
        e.preventDefault()
        
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value,
            proficiencies: [...props.formData.proficiencies, ...proficiencies]
        })

    }
    
    function handleChange(e) {
        if (!proficiencies.includes(e.target.value)) {
            setProficiencies([...proficiencies, e.target.value])
        }
    }

    return (
       <section className="shadow row">
            <div className="tabs">
            {formOptions.classes  && formOptions.classes.map(charClass =>
                <div key={charClass.index} className="border-b bg-white tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox"  />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" >
                            <span className="text-grey-darkest font-thin text-xl">
                                {charClass.name}
                            </span>
                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                {/* <!-- icon by feathericons.com --> */}
                                <svg aria-hidden="true"  data-reactid="266" fill="none" height="24" stroke="#606F7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="6 9 12 15 18 9">
                                    </polyline>
                                </svg>
                            </div>
                        </header>
                        <div className="tab-content overflow-auto">
                            <div className="pl-8 pr-8 pb-5 text-grey-darkest"> 
                            <p className="mt-2 line-clamp-3 font-bold text-md/relaxed text-gray-700">
                            Hit Die
                        </p>
                        <p>
                            {charClass.hit_die}
                        </p>
                        <br />
                        <p className="mt-2 line-clamp-3 font-bold text-md/relaxed text-gray-700">Saving Throws</p>
                        <p>
                            {charClass.saving_throws.map((savingThrow, i) =>
                                <span key={i} className="rounded-full bg-purple-100 px-2.5 py-0.5 mx-1 text-md text-purple-600">{savingThrow.full_name}</span>
                            )}
                        </p>
                        <br />
                        {charClass.spellcasting && charClass.spellcasting.info.map(spell =>
                            <article key={spell.name}>
                            <p className="mt-2 line-clamp-3 font-bold text-md/relaxed text-gray-700">
                               {spell.name}
                            </p>
                            <p>
                                {spell.desc[0]}
                            </p>
                            <br />
                            </article>
                            )}
                        {charClass.class_levels.map((classLevel) => 
                           classLevel.features && classLevel.features.map((feature, i) =>
                            <article key={classLevel.__typename + i}>
                            <p className="mt-2 line-clamp-3 font-bold text-md/relaxed text-gray-700">
                               {feature.name}
                            </p>
                            <p>
                                {feature.desc[0]}
                            </p>
                            <br />
                            </article>
                            )
                           
                            )}
                            {charClass.proficiency_choices.map(proficiency => {

                                const selectElements = [];

                                for (let j = 0; j < proficiency.choose; j++) {
                                selectElements.push(
                                    <article key={proficiency.index}>
                                    {j === 0 && <><br /><p className="mt-2 line-clamp-3 font-bold text-xl/relaxed text-gray-700">{proficiency.desc}</p></>}
                                    <br />
                                    <select onChange={handleChange} name={proficiency.type} defaultValue='Please Select'>
                                    <option disabled>Please Select</option>
                                        {proficiency.from.options.map((option) => (
                                        <option key={option.item && option.item.name} value={option.item && option.item.name}>
                                        {option.item && <>{option.item.name}</>}
                                    </option>
                                    ))}
                                    </select>
                                    <br />
                                    </article>
                                    );
                                }

                                return selectElements;
                            
                                })}
                                <br />
                                <button onClick={handleClassSelect} value={charClass.index} name='class' className="px-8 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">Choose Class</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section> 
    )
}

export default ChooseClassForm