import React from "react";
import { Grid, Image, Divider, Segment, Header, Input } from "semantic-ui-react";


export default function HighlightedContent() {
  return (
    <Grid>
      <Grid.Row stretched columns="2">
        <Grid.Column className="sClass">
         
          <Image src="https://res.cloudinary.com/dxjar69ga/image/upload/v1639995628/odev%C4%B0cin_qw7utd.png" />
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color="black" textAlign="right">
              <span className="headline-1">Sağlık</span>
            </Header>
            <br />
            <Header color="black" textAlign="right">
              <span className="headline-2">Sistemi</span>
            </Header>
            <Header color="black" size="huge" textAlign="right" icon={"hospital"}>
              
            </Header>
          </Segment>
          
          
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}