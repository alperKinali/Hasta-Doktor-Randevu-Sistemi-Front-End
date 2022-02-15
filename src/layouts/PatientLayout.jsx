import React from 'react'
import Headline from './Headline'
import PatientList from '../pages/PatientList'
import { Container } from "semantic-ui-react";

export default function PatientLayout() {
    return (
        <div>
      <Container className="content">
        <Headline content="Hastalar" />

        <PatientList />
      </Container>
    </div>
    )
}
