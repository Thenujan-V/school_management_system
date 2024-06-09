import axios from "axios";

const BASE_URL_API = `http://localhost:8080/api/v1`

export const addExamTimeTable = async(datas) => {
    console.log('datassss    :', datas)
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addexamdate`, datas)
        return response
    }
    catch(error){
        throw error
    }
} 

export const addSyllabus = async(data) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addsyllabus`, data)
        return response
    }
    catch(error){
        throw error
    }
} 

export const studentDetails = async(grade) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/admin/viewstudentsgradewish/${grade}`)
        return response
    }
    catch(error){
        throw error
    }
}

export const addResult = async(datas) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addresult`, datas)
        return response
    }
    catch(error){
        throw error
    }
}

export const studentsSignup = async(datas) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/signup`, datas)
        return response
    }
    catch(error){
        throw error
    }
}
