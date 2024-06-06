import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const getSubjects = async(grade, term) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewsubjects/${grade}/${term}`)
        return response
    }
    catch(error){
        throw error
    }
} 