import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { CLASSES } from "../../GraphQL/Queries";
import './styles.css' 



function ChooseClassForm(props) {
    const navigate = useNavigate()
    const { error, loading, data } = useQuery(CLASSES)
    const [formOptions, setFormOptions] = useState([])

    useEffect(() => {
        if (data) {
           setFormOptions(data)
           console.log(formOptions)
        }
    
    }, [data] )
    

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error somewhere</div>
    }

    function handleClassSelect(e) {
        e.preventDefault()
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value
        })

    }

    return (
       <section className="shadow row">
                <div className="tabs">
            {formOptions.classes  && formOptions.classes.map(charClass =>
                <div className="border-b tab">
                    <div className="border-l-2 border-transparent relative">
                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                            <span className="text-grey-darkest font-thin text-xl">
                                {charClass.name}
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
                            <p className="mt-2 line-clamp-3 font-bold text-md/relaxed text-gray-700">
                            Proficiencies
                        </p>
                        <p>
                        {charClass.proficiencies.map((proficiency, i) =>
                        <span key={i} className="rounded-full bg-purple-100 px-2.5 py-0.5 mx-1 text-md text-purple-600">{proficiency.name}</span>
                            )}
                        </p>
                        <br />
                        <p>
                            Saving Throws
                        </p>
                        {charClass.saving_throws.map((savingThrow, i) =>
                        <span key={i} className="rounded-full bg-purple-100 px-2.5 py-0.5 mx-1 text-md text-purple-600">{savingThrow.name}</span>
                            )}
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