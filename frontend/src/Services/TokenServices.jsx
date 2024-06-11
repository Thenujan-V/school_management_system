import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
    return localStorage.getItem('token');
};


export const decodeToken = (token) => {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};

export const logout = () => {
    try{
        localStorage.removeItem("token")
    }
    catch(error){
        throw error
    }
}