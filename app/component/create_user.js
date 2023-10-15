const axios = require('axios')

export function saveData(data){

  axios.post('http://localhost:3000/api/signup', data)
  .then(response => {
    console.log('Request sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending the request:', error);
  });
}
