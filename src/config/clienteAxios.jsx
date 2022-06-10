import axios from "axios";

const clienteAxios = axios.create({
    //baseURL: `${import.meta.env.VITE_BACKEND_URL}`
    //Url prod
    baseURL: `https://backendcuestionario.herokuapp.com`

})

export default clienteAxios;



