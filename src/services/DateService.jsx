import axios from "axios";

export default class DateService {
    add(values){
        return axios.post("http://localhost:8080/api/date/add", values);
    }

    getAll(){
        return axios.get("http://localhost:8080/api/date/getall");
    }
    getById(id) {
        return axios.get(`http://localhost:8080/api/date/getbyid?id=${id}`);
    }
    
}
