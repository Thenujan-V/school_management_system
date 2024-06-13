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

export const deleteExamSubject = async(exam_id, subject_id) => {
    try{
        const response = await axios.delete(`${BASE_URL_API}/admin/deleteexamdate/${exam_id}/${subject_id}`)
        return response
    }
    catch(error){
        throw error
    }
}

export const allStudentsDetails = async(datas) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/admin/viewallstudents`)
        return response
    }
    catch(error){
        throw error
    }
}


export const allStudentsAllMarks = async(grade, term) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/admin/viewallstudents/${grade}/${term}`)
        console.log('res :', grade, term)
        return response
    }
    catch(error){
        throw error
    }
}

export const addSubjects = async(data) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addsubject`, data)
        return response
    }
    catch(error){
        throw error
    }
}


export const studentDetailsIndexNo = async(indexNo) => {
    try{
        const response = await axios.get(`${BASE_URL_API}/admin/viewstudentsindexNowish/${indexNo}`)
        return response
    }
    catch(error){
        throw error
    }
}

export const addPrincipalsDetails = async(data) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addprinciple`, data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
    })
        return response
    }
    catch(error){
        throw error
    }
}

export const addEventDetails = async(data) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/addevent`, data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
    })
        return response
    }
    catch(error){
        throw error
    }
}

export const deleteStudents = async(indexNo) => {
    try{
        const response = await axios.post(`${BASE_URL_API}/admin/deleteStudent/${indexNo}`)
        return response
    }
    catch(error){
        throw error
    }
}