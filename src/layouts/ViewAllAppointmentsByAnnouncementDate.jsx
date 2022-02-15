import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Reveal, Image, Button } from "semantic-ui-react";


export default function ViewAllAppointmentsByAnnouncementDate() {
    return (
      <Container className="view-all-Appointment-by-date">
        <Grid>
          <Grid.Row centered>
            <Reveal animated="rotate">
            </Reveal>
          </Grid.Row>
          <Grid.Row centered>
            <Button circular color="yellow" as={NavLink} to={"/dates"} content="Tüm Randevuları Tarihine Göre Görüntüle" />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }