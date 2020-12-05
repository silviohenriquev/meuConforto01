import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://meuconforto-c4a46.firebaseio.com',
});

export default api;