import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { RACES } from "../../GraphQL/Queries";
import ChooseRaceForm from "../ChooseRaceForm";
import ChooseClassForm from "../ChooseClassForm";
import ChooseAbilityForm from "../ChooseAbilityForm";
import './styles.css' 

function CharCreationForm() {
    // const navigate = useNavigate()
    // const { error, loading, data } = useQuery(RACES)
    // const [formOptions, setFormOptions] = useState([])
    const [formData, setFormData] = useState({
        race:''
    })

    // useEffect(() => {
    //     if (data) {
           
    //        setFormOptions(data)
    //     }
    
    // }, [data] )
    

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    // if (error) {
    //     return <div>Error somewhere</div>
    // }

    // function handleRaceSelect(e) {
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }

    return (

        <form className="w-3/5 p-8 mx-auto">
            {!formData.race && <ChooseRaceForm formData={formData} setFormData={setFormData}/>}
            {formData.race && !formData.class && <ChooseClassForm formData={formData} setFormData={setFormData} />}
            {formData.class && <ChooseAbilityForm formData={formData} setFormData={setFormData} />}
           

        </form>
    )
} 

export default CharCreationForm