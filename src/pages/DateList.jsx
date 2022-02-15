import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DateService from "./../services/DateService";
import CityService from "../services/CityService";
import ButtonsOfPagination from "../layouts/ButtonsOfPagination";

import { Card, Label, Button, Icon, Grid, Form } from "semantic-ui-react";

export default function DateList({ type, itemsPerRow, id }) {
  const [dates, setDates] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityId, setCityId] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfData, setNumberOfData] = useState(0);


  let dateService = new DateService();
  let cityService = new CityService();

  let totalNumberOfPages = Math.ceil(numberOfData === 0 ? 1 : numberOfData / pageSize);

  useEffect(() => {
    dateService.getAll(cityId).then((result) => setDates(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));

  });

  const cityOptions = [{ value: 0, text: "City" }];
  cities.map((city) => (cityOptions.push({
    key: city.id,
    text: city.city,
    value: city.id,
  })));


  const handleNextPage = () => {
    if (pageNo != totalNumberOfPages) {
      setPageNo(pageNo + 1);
    }
  };

  const handlePageSize = (size) => {
    setPageNo(1);
    setPageSize(size);
  };

  const handleCity = (value) => {
    setCityId(value);
  };


  return (
    <Grid>
      <Card.Group itemsPerRow={itemsPerRow}>
        {dates.map((date) => (
          <Card raised key={date.id}>
            <Card.Content>
              <Card.Header className="montserrat">
                {date.doctor?.firstName} {date.doctor?.lastName}
              </Card.Header>
              <Card.Meta>
                {date.doctor?.hospitalName}
                <br />
              </Card.Meta>
              <Card.Meta>
                {date.doctor?.hospitalAddress}
                <br />
                &nbsp;
              </Card.Meta>
              <Card.Description className="orbitron">
                <strong>Randevu Tarihi</strong>
                &nbsp;&nbsp;
                {(date.dateTime)}
                <br />
                <strong>Randevu Bitiş Tarihi</strong>
                &nbsp;&nbsp;
                {new Date(date.closingDate).toDateString()}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              {type === "recently" && <Icon name="fire" size="big" color="yellow" />}
              <Button circular compact floated="right" color="violet" content="Randevu Detayı" as={NavLink} to={`/dates/date/${date.id}`} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Grid>
  );
}