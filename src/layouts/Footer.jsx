import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider, Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
    return (
        <Container className="footer">
            <Divider />
            <br />

            <Grid>
                <Grid.Row centered>
                    <List link horizontal>
                        <List.Item as={NavLink} to="/home" content="Ana Sayfa" />
                        <List.Item as={NavLink} to="/patients" content="Hastalar" />
                        <List.Item as={NavLink} to="/doctor" content="Doktorlar" />
                        <List.Item as={NavLink} to="/aboutUs" content="Hakkımızda" />
                    </List>
                </Grid.Row>
                <Grid.Row centered>2021 ・ Alper Kınalı</Grid.Row>
                <Grid.Row centered>
                    <List link horizontal>
                        <List.Item href="https://github.com/Alperkinali" target="blank">
                            <Icon name="github" size="large" />
                        </List.Item>
                        <List.Item href="https://www.linkedin.com/in/alper-k%C4%B1nal%C4%B1-ba44591a4/" target="blank">
                            <Icon name="linkedin" size="large" />
                        </List.Item>
                    </List>
                </Grid.Row>
            </Grid>
            <br />
            <br />
            <br />
        </Container>
    )
}
