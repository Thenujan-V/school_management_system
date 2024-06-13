import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const getPrincipalsDetails = async() => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/getPrincipalsDetails`)
        return response
    }
    catch(error){
        throw error
    }
} 
