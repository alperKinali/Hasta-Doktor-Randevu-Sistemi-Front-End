import axios from "axios";

export default class DiseaseHistories {
    getall(){
        return axios.get(`http://localhost:8080/api/diseasehistory/getall`);
    }
}
