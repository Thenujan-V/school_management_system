import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const getExamTimeTable = async(grade) => {
    console.log('gr :', grade)
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewexamdate/${grade}`)
        return response
    }
    catch(error){
        throw error
    }
} 