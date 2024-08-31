import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

// Api.get()
// Api.post()
// Api.put()
// Api.delete()

export default Api;