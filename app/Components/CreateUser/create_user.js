import axios from 'axios'

export function Create(userData){
    axios.post('http://localhost:3000/api/createUser', userData)
    // console.log(userData);
} 