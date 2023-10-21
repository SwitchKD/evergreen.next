import axios from "axios";

export function saveUid(data){

    axios.post('http://localhost:3000/api/getuser', data)
  .then(response => {
    // console.log('Request sent successfully:', data);
  })
  .catch(error => {
    // console.error('Error sending the request:', error);
  });
  }