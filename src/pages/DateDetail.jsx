import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import DateService from '../services/DateService';
import MessageModal from "./../layouts/MessageModal";
import Headline from "../layouts/Headline";
import { Container, Header, Grid, Divider, Icon, Label, Button } from "semantic-ui-react";


export default function DateDetail() {
    let { id } = useParams();
    const [date, setDate] = useState({});
    const [open, setOpen] = useState(false);
    const history = useHistory();
    let dateService = new DateService();

    useEffect(() => {
        dateService.getById(id).then((result) => setDate(result.data?.data));
    }, []);




    return (
        <div>
            <Container className="content">
                <Headline content="Seçili Randevu" />

                <Grid>
                    <Grid.Row>
                        <Grid.Column width="3" />
                        <Grid.Column width="10">

                            <Grid.Row>
                                <Header>
                                    <span className="detail-header" >
                                        <strong>{date.doctor?.firstName}</strong>  <strong>{date.doctor?.lastName}  <Icon name="user doctor" /></strong>
                                    </span>
                                </Header>
                                <Icon name="heart" />
                                {date.doctor?.doctorTitle}
                                <br />
                                <Icon name="heart" />
                                {date.doctor?.doctorDegree}
                                <br />
                                <Icon name="hospital" />
                                {date.doctor?.hospitalName}
                                <br />
                                <Icon name="location arrow" />
                                {date.doctor?.hospitalAddress}
                                <br />
                                <Icon name="envelope" />
                                {date.doctor?.email}
                                <Divider />
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum ad adipisci quam at blanditiis totam est magni porro vero placeat, atque harum id voluptatum. Iusto perferendis architecto aliquid aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dignissimos illum laborum totam provident autem maiores, eius, necessitatibus assumenda vel quos corporis quia dolor eveniet praesentium asperiores commodi dolore quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit, cum nihil a deleniti dicta recusandae quae cupiditate. Vitae accusantium ex nesciunt cum ad. Repellat voluptatibus temporibus cum laborum natus.lorem
                                </p>
                                <br /><br />
                                <ul>
                                    <li>
                                        <strong>Randevu Oluşturulan Şehir:</strong>
                                        &nbsp;&nbsp;
                                        {date.city?.city}
                                    </li>
                                    <li>
                                        <strong>Randevu Tarihi :</strong>
                                        &nbsp;&nbsp;
                                        {date.dateTime}
                                    </li>
                                    
                                    
                                </ul>


                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width="3" />
                    </Grid.Row>
                </Grid>

            </Container>

        </div>
    )
}
