const axios = require('axios')

export function updateuserid(data){
    console.log(data)
    const fdata = {
        motd:"made by ryzxxn",
        user_id: data
    }
  axios.post('http://localhost:3000/api/updateUserid', fdata)
  .then(response => {
    console.log('Request sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending the request:', error);
  });
}