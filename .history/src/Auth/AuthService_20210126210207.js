import { axiosInstance } from '../api';
export default class AuthService {

    //post Login...
    login = async () => {
        this.postData().then(resp => {

        });

    }


    postData = async (email, password) => {

        return await axiosInstance.post('/login', {
            "email": email,
            "password": password
        })

    }




};