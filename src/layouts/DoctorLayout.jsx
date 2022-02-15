import React from "react";
import Headline from "./Headline";
import DoctorList from "../pages/DoctorList";
import { Container } from "semantic-ui-react";

export default function DoctorLayout() {
    return (
        <div>
            <Container className="content">
                <Headline content="Doktorlar" />

                <DoctorList />
            </Container>
        </div>
    );
}