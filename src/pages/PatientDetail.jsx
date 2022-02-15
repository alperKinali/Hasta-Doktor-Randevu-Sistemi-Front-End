import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import DiseaseHistoriesService from "../services/DiseaseHistoriesService";
import MedicationService from "../services/MedicationService";
import ComplaintsService from "../services/ComplaintsService";
import VaccinationCardsService from "../services/VaccinationCardsService";
import DateLabel from "../layouts/DateLabel";
import { Container, Grid, Header, Image, Segment, Divider, Icon, Button } from "semantic-ui-react";
export default function PatientDetail() {
    let { id } = useParams();
    const [diseaseHistories, setDiseaseHistories] = useState([]);
    const [medications, setMedications] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [vaccinationCards, setVaccinationCards] = useState([]);
    let diseaseHistoriesService = new DiseaseHistoriesService();
    let medicationService = new MedicationService();
    let complaintsService = new ComplaintsService();
    let vaccinationCardsService = new VaccinationCardsService();

    useEffect(() => {
        diseaseHistoriesService.getall().then((result) => setDiseaseHistories(result.data.data));
        medicationService.getall().then((result) => setMedications(result.data.data));
        complaintsService.getall().then((result) => setComplaints(result.data.data));
        vaccinationCardsService.getAll().then((result)=>setVaccinationCards(result.data.data));
    }, []);

    return (
        <div>
            <Container className="content">
                <Headline content="Seçili Hasta" />
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="3" />
                        <Grid.Column width="10">
                            {diseaseHistories.map((pr) => (
                                <Grid key={pr.id}>
                                    {pr.patientRegistiration?.patient?.id == id && (
                                        <Grid.Row>

                                            <Grid.Column>
                                                {pr.image == null
                                                    ? <Image circular size="small" src="https://res.cloudinary.com/dxjar69ga/image/upload/v1640202893/bit1_user_ckfrbd_qvv85p.svg" />
                                                    : <Image circular size="small" src={pr.image?.url} />}
                                                <Header>
                                                    <span className="detail-header">
                                                        {pr.patientRegistiration?.patient?.firstName} {pr.patientRegistiration?.patient?.lastName}
                                                    </span>
                                                </Header>

                                                <Icon name="envelope" />
                                                {pr.patientRegistiration?.patient?.email}
                                                <br />
                                                <Icon name="id badge" />
                                                {pr.patientRegistiration?.patient?.identityNumber}
                                                <br />
                                                <Icon name="birthday cake" />
                                                {pr.patientRegistiration?.patient?.ageOfYear}
                                                <br />
                                                {pr.diseaseHistory === null
                                                    ? null
                                                    : <Segment raised>
                                                        
                                                        <Header as="h4"  className="orbitron" />
                                                        <br />Hastalık Geçmişi : { pr.diseaseHistory}<br /><br />
                                                    </Segment>}
                                                {console.log(pr)}
                                            </Grid.Column>

                                        </Grid.Row>
                                    )}
                                </Grid>
                            ))}
                            {medications.map((medication) => (
                                <Grid key={medication.id}>
                                {medication.patientRegistiration?.patient?.id == id && (
                                    <Grid.Row>

                                        <Grid.Column>
                                            {medication === null
                                                ? null
                                                : <Segment raised>
                                                    <Header as="h5"  className="orbitron" />
                                                    <br />Kullandığı İlaç:  {medication.name}<br /><br />
                                                </Segment>}
                                            {console.log(medication)}
                                        </Grid.Column>
                                    </Grid.Row>
                                )}
                            </Grid>
                            ))}
                            {complaints.map((complaint) => (
                                <Grid key={complaint.id}>
                                    {complaint.patientRegistiration?.patient?.id == id && (
                                        <Grid.Row>

                                            <Grid.Column>
                                                {complaint === null
                                                    ? null
                                                    : <Segment raised>
                                                        <Header as="h5"  className="orbitron" />
                                                        <br />Hasta Şikayeti:  {complaint.complaint}<br /><br />
                                                    </Segment>}
                                                {console.log(complaint)}
                                            </Grid.Column>

                                        </Grid.Row>
                                    )}
                                </Grid>
                            ))}
                            {vaccinationCards.map((complaint) => (
                                <Grid key={complaint.id}>
                                    {complaint.patientRegistiration?.patient?.id == id && (
                                        <Grid.Row>

                                            <Grid.Column>
                                                {complaint === null
                                                    ? null
                                                    : <Segment raised>
                                                        <Header as="h5"  className="orbitron" />
                                                        <br />Hasta Aşı Kartı:  {complaint.name}<br /><br />
                                                    </Segment>}
                                                {console.log(complaint)}
                                            </Grid.Column>

                                        </Grid.Row>
                                    )}
                                </Grid>
                            ))}
                            
                        </Grid.Column>
                        <Grid.Column width="3" />
                    </Grid.Row>
                </Grid>


            </Container>
        </div>

    );
}
