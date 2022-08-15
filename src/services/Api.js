import axios from 'axios'

const api = axios.create({baseURL: ''})
const token = localStorage.getItem('token')
api.defaults.headers.authorization = `Bearer ${token}`

export default api