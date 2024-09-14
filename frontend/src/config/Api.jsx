import axios from 'axios';
import Message from '../components/Message';

const Api = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

Api.interceptors.request.use(function (config) {
  // Faz alguma coisa antes da requisição ser enviada
  return config;
}, function (error) {
  // Faz alguma coisa com o erro da requisição
  return Promise.reject(error);
});

// Adiciona um interceptador na resposta
Api.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
  }, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    console.log(error);
    if(error.status === 403) {
        Message.error(error.response.data.msg)
    }
    return Promise.reject(error);
  });


export default Api;
















// RESTFUL API
// Api.get('usuarios')
// Api.get('usuarios/1')
// Api.post('usuarios', dados)
// Api.put('usuarios/1', dados)
// Api.delete('usuarios/1')