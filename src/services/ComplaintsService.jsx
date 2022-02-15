import axios from "axios";

export default class ComplaintsService  {
    getall(){
        return axios.get(`http://localhost:8080/api/complaint/getall`);
    }
}
