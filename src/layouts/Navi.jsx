import React from "react";
import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Menu, Container, Header } from "semantic-ui-react";

export default function Navi() {
  return (
    <Menu borderless fixed="top">
      <Container >
        <Menu.Item color="violet" position="left">
          <Header as="h4" color="#afdffd" className="orbitron" icon="hospital outline" content="Sağlık Sistemi" />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home" icon="home" content="Ana Sayfa" />
        <Menu.Item as={NavLink} to="/dates" icon="yandex" content="Randevular" />
        <Menu.Item as={NavLink} to="/patients" icon="user circle outline" content="Hastalar" />
        <Menu.Item as={NavLink} to="/doctors" icon="user doctor" content="Doktorlar" />
        <Menu.Item as={NavLink} to="/aboutUs" icon="qq" content="Hakkımızda" />
        <Menu.Menu position="right">
          <Menu.Item position="right">
           <LogIn/>
          </Menu.Item>
          <Menu.Item position="right">
            <SignUp/>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
