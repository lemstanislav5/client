import axios from "axios";
const baseUrl = 'https://chat-client.ga/api';

const reqCreator = (url, data, callback, errorCallback) => {
  return axios.post(url, data)
          .then((response) => {
            callback(response);
          })
          .catch((error) => {
            errorCallback(error);
          });
}

export const api = {
  auth: (data) => reqCreator(baseUrl + '/auth', data, (e) => console.log(e), (e) => console.log(e)),
  registration: (login, password) => reqCreator(baseUrl + '/registration', {login, password}, (e) => console.log(e), (e) => console.log(e))
}
// axios.post('https://chat-client.ga/api/registration', {
//     title: "Title of post",
//     body: "Body of post"
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
