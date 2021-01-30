import  axiosInstance  from '../api';
export default class AuthService {

    //post Login...
    signIn = async (email, password) => {
        alert(email);
        return await axiosInstance.post('/login', {
            "email": email,
            "password": password
        })
    }


    login = async () => {


    }




};