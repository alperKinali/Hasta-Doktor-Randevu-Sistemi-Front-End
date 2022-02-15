
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PatientService from "../services/PatientService";
import { Card, Header, Image } from "semantic-ui-react";
import PatientRegistirationService from "../services/PatientRegistirationService";
export default function PatientList() {
    const [patients, setPatients] = useState([]);
    let patientRegistirationService = new PatientRegistirationService();

    useEffect(() => {
        patientRegistirationService.getAll(true, 1).then((result) => setPatients(result.data.data));
    }, []);
    return (
        <Card.Group itemsPerRow="4">
            {patients.map((pr) => (
                <Card raised key={pr.id}>
                    <Card.Content textAlign="center" as={NavLink} to={`/patients/patient/${pr.patient?.id}/`}>
                        <br />
                        {pr.patient?.image == null
                            ? <Image circular size="small" src="https://res.cloudinary.com/dxjar69ga/image/upload/v1640202893/bit1_user_ckfrbd_qvv85p.svg" />
                            : <Image circular size="small" src={pr.image?.url} />}
                        <br /><br />
                        <Card.Header>
                            {pr.patient?.firstName} {pr.patient?.lastName}
                        </Card.Header>
                        <Card.Meta>
                        </Card.Meta>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>

    )
}
