import axios from 'axios';


const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }

export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}

export async function postCharacter(character) {
    const { data } = await axios.post('/api/characters', character, authHeader)
    return data
}

export async function allCharacters() {
    const { data } = await axios.get('/api/characters/all', authHeader)
    return data
}

export async function deleteCharacter(id) {
    const { data } = await axios.delete(`/api/characters/${id}`, authHeader)
    return data
}

export async function characterDetails(id) {
    const { data } = await axios.get(`/api/characters/${id}`, authHeader)
    return data
}