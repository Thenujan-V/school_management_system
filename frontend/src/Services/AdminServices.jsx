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