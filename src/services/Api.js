import axios from 'axios'

const api = axios.create({ baseURL: 'https://portal-api-campeoes.herokuapp.com/' })
const token = localStorage.getItem('token')
api.defaults.headers.authorization = `Bearer ${token}`

export default api