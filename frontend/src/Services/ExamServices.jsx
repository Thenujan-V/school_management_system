import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const getExamTimeTable = async(grade, term) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewexamdate/${grade}/${term}`)
        return response
    }
    catch(error){
        throw error
    }
} 

export const fetchResults = async(inderxNo, term) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewresult/${inderxNo}/${term}`)
        return response
    }
    catch(error){
        throw error
    }
} 