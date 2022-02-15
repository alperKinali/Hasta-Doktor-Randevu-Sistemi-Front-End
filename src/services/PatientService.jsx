import axios from "axios";

export default class PatientService {

    register(values) {
        return axios.post("http://localhost:8080/api/patient/register", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/patient/getById?id=${id}`);
    }
    getAll(){
        return axios.get(`http://localhost:8080/api/patient/getall`)
    }

}