import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import DoctorService from "../services/DoctorService";
import Headline from "../layouts/Headline";
import { Container, Header, Grid, Divider, Icon, Button, Image } from "semantic-ui-react";

export default function DoctorDetail() {
  let { id } = useParams();
  const [doctor, setDoctors] = useState({});
  let doctorService = new DoctorService();
  useEffect(() => {
    doctorService.getById(id).then((result) => setDoctors(result.data?.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="DOKTOR" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Grid.Row>
                <br /><br /><br />
                <Button compact circular floated="right" color="yellow" content="Randevu Oluştur" as={NavLink} to={`/doctors/doctor/${id}/date/add`} />
              </Grid.Row>
              <Grid.Row>
                <Image circular size="small" src="https://res.cloudinary.com/dxjar69ga/image/upload/v1640202893/bit1_user_ckfrbd_qvv85p.svg" />
                <Header>
                  <span className="detail-header">
                    {doctor.firstName} {doctor.lastName}
                  </span>
                </Header>
                <Icon name="hospital symbol" />
                {doctor.hospitalName}
                <br />
                <Icon name="location arrow" />
                {doctor.hospitalAddress}
                <br />
                <Icon name="envelope" />
                {doctor.email}
                <br />
                <Icon name="doctor" />
                {doctor.doctorTitle}
                <Divider />
                <br />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}