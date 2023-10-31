import axios from 'axios'

export function Create(userData){
    axios.post('https://plantio.vercel.app/api/createUser', userData)
} 