import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, Icon, Modal, Segment } from "semantic-ui-react";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };
  return (
    <span>
      <Button
        circular
        color="yellow"
        content="Kaydol"
        onClick={() => handleModal(true)}
      />
      <Modal
        basic
        dimmer
        onClose={() => handleModal(false)}
        onOpen={() => handleModal(true)}
        open={open}
        size="small"
      >
        <Header icon as="h2" className="orbitron">
          <Icon name="paper plane" />
          Ne Tür Bir Hesap Oluşturmak İstiyorsunuz.
        </Header>
        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="pink"
                  content="Hasta"
                  as={NavLink}
                  to={"/patient/add"}
                  onClick={() => setOpen(false)}
                />
              </Grid.Column>
              <Grid.Column width="2">
                <Segment basic className="or">
                  Ya da
                </Segment>
              </Grid.Column>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="yellow"
                  content="Doktor"
                  as={NavLink}
                  to={"/doctor/add"}
                  onClick={() => setOpen(false)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </span>
  );
}