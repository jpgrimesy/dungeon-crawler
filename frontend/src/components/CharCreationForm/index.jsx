import { useState } from "react";
import ChooseRaceForm from "../ChooseRaceForm";
import ChooseClassForm from "../ChooseClassForm";
import ChooseAbilityForm from "../ChooseAbilityForm";
import { postCharacter } from "../../../utils/backend";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate()
    function handleChange(e) {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        postCharacter({...formData})
        navigate('/user')
    }
    
    return (

        <form className="w-3/5 text-center p-8 mx-auto">
            <input className='mt-20 mb-5 class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full' onChange={handleChange} type='text' name='name' placeholder="Enter Name" required></input>
            {formData.name && formData.class && 
            <button className='bg-white rounded-xl border-2 border-red-500 px-5 py-3 text-base mb-3 font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5' type='submit' onClick={handleSubmit}>Create</button>}
            {!formData.race && <ChooseRaceForm formData={formData} setFormData={setFormData}/>}
            {formData.race && !formData.class && <ChooseClassForm formData={formData} setFormData={setFormData} />}
            {formData.class && <ChooseAbilityForm formData={formData} setFormData={setFormData} />}
        </form>
    )
} 

export default CharCreationForm