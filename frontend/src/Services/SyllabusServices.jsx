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

export const getContentsNames = async(grade, subject) => {

    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewsyllabuscontents/${grade}/${subject}`)
        return response
    }
    catch(error){
        throw error
    }
}

export const getSubjectNotes = async(grade, subject, subject_content) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/student/viewsyllabus/${grade}/${subject}/${subject_content}`, {
            headers: {
                'Accept': 'application/pdf',
            },
            responseType: 'blob',
        })
        return response
    }
    catch(error){
        throw error
    }
}