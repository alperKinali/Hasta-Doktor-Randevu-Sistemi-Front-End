import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DoctorService from "../services/DoctorService";
import { Card, Header } from "semantic-ui-react";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  let doctorService = new DoctorService();
  useEffect(() => {
    doctorService.getAll(true, 1).then((result) => setDoctors(result.data.data));
  }, []);
  return (
    <Card.Group itemsPerRow="2">
      {doctors.map((dr) => (
        <Card raised key={dr.id}>
          <Card.Content textAlign="center" as={NavLink} to={`/doctors/doctor/${dr.id}/`}>
          <Card.Header>
              <Header as="h3" color="black" content={dr.doctorTitle} />
            </Card.Header>
            <Card.Header>
              <Header as="h3" color="black" content={dr.firstName} />
            </Card.Header>
            <Card.Header>
            <Header as="h3" color="black" content={dr.lastName} />
            </Card.Header>
            <Card.Meta content={dr.doctorTitle} />
            <Card.Meta content={dr.hospitalAddress} />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}