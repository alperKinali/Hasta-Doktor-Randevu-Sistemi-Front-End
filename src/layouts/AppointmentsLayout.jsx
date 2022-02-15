import React from "react";
import Headline from "./Headline";
import { Container } from "semantic-ui-react";
import AppointmentsList from "../pages/AppointmentsList";

export default function AppointmentsLayout() {
    return (
        <div>
            <Container className="content">
                <Headline content="Randevular" />

                <AppointmentsList type="filtered" itemsPerRow="2" />

                
            </Container>

        </div>
    )
}

