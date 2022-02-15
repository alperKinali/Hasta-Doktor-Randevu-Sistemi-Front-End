import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, Icon, Modal, Segment } from "semantic-ui-react";

export default function LogIn() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };
  
  return (
    <span>
      <Button
        circular
        color="blue"
        content="Giriş Yap"
        onClick={() => handleModal(true)}
      />

      <Modal
        basic
        dimer
        onClose={() => handleModal(false)}
        onOpen={() => handleModal(true)}
        open={open}
        size="small"
      >
        <Header icon as="h2" className="orbitron">
          <Icon name="sign-in" />
          Hangi Hesap İle Giriş yapılsın ?
        </Header>

        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="blue"
                  content="Hasta"
                  as={NavLink}
                  to={"#"}
                  onClick={() => setOpen(false)}
                ></Button>
              </Grid.Column>
              <Grid.Column width="2">
                
              </Grid.Column>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="yellow"
                  content="Doktor"
                  as={NavLink}
                  to={"#"}
                  onClick={() => setOpen(false)}
                ></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </span>
  );
}