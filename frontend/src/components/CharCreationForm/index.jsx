import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ChooseRaceForm from "../ChooseRaceForm";
import ChooseClassForm from "../ChooseClassForm";
import ChooseAbilityForm from "../ChooseAbilityForm";
import './styles.css' 

function CharCreationForm() {
    const [formData, setFormData] = useState({
        name: '',
        race:'',
        class:'',
        proficiencies:[],
        languages:[],
        dex:'',
        con:'',
        str:'',
        wis:'',
        int:'',
        cha:''
    })
    function handleChange(e) {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (

        <form className="w-3/5 p-8 mx-auto">
            <input onChange={handleChange} name='name'></input>
            {!formData.race && <ChooseRaceForm formData={formData} setFormData={setFormData}/>}
            {formData.race && !formData.class && <ChooseClassForm formData={formData} setFormData={setFormData} />}
            {formData.class && <ChooseAbilityForm formData={formData} setFormData={setFormData} />}
           

        </form>
    )
} 

export default CharCreationForm