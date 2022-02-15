import axios from "axios";

export default class PatientRegistirationService {

    update(values) {
        return axios.put("http://localhost:8080/api/patientregistiration/update", values);
    }

    getById(id) {
        return axios.get(`http://localhost:8080/api/resumes/getById?id=${id}`);
    }
    getbypatientid(patientId) {
        return axios.get(`http://localhost:8080/api/patientregistiration/getbypatientid?patientId=${patientId}`);
    }  
    getAll(){
        return axios.get(`http://localhost:8080/api/patientregistiration/getall`)
    }
    
   
    
}