import axios from "axios";

export default class DoctorService {

    register(values) {
        return axios.post("http://localhost:8080/api/doctor/register", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/doctor/getbyid?id=${id}`);
    }

    getAll(){
        return axios.get(`http://localhost:8080/api/doctor/getall`)
    }

}