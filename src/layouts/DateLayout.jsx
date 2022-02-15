import React from "react";
import Headline from "./Headline";
import DateList from "../pages/DateList";
import { Container } from "semantic-ui-react";



export default function DateLayout() {
    return (
        <div>
            <Container className="content">
                <Headline content="Randevular" />
                <DateList type="filtered" itemsPerRow="2" />
            </Container>

        </div>
    )
}
