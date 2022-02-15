import axios from "axios";

export default class MedicationService {
    getall(){
        return axios.get(`http://localhost:8080/api/medications/getall`);
    }
}
