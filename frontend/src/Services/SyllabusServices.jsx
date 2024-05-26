import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const getSubjectNames = async(grade) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewsubjectsname/${grade}`)
        return response
    }
    catch(error){
        throw error
    }
}
export const getSubjectNotes = async(grade, subject) => {
    console.log(grade, subject)
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewsyllabus/${grade}/${subject}`)
        return response
    }
    catch(error){
        throw error
    }
}