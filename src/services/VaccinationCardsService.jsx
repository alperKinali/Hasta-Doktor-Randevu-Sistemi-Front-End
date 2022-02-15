
import axios from 'axios'
export default class VaccinationCardsService {

    
    getAll(){
        return axios.get(`http://localhost:8080/api/vacinationCard/getall`);
    }

}

