import React from 'react'
import { Container } from "semantic-ui-react"; 
import Headline from './Headline';
export default function AboutLayout() {
    return (
        <Container className="content">
            <Headline content="Odevi Hazırlayan" />
            <br></br>
            <p>Alper Kınalı</p>
            <p>180255024</p>
            <p>Bitirme Projesi 1 </p>
        </Container>
    )
}


