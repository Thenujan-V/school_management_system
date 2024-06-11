import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const signinStudents = async(formData) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/student/signin`, formData)
    console.log('formData : ',response.data)
        return response
    }
    catch(error){
        throw error
    }
} 