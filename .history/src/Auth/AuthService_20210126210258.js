import { axiosInstance } from '../api';
export default class AuthService {

    //post Login...
    signIn = async (email, password) => {
        return await axiosInstance.post('/login', {
            "email": email,
            "password": password
        })

    }




};