import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import DateService from "../services/DateService";
import CityService from "../services/CityService";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button} from "semantic-ui-react";


export default function DateAdd() {
  let { id } = useParams();
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  let dateService = new DateService();
  let cityService = new CityService();
  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);
  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.city,
    value: city,
  }));
  const initialValues = {
    doctor: { id : id },
    city: "",
    dateTime:"",
    creationDate: "",
  };
  const validationSchema = Yup.object({
    city: Yup.object().required("Required Field"),
    dateTime: Yup.date().required("Required Failded"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    dateService.add(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Randevu Oluştur"  />
        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="city"
                    label="Şehir"
                    options={cityOptions}
                    onChange={(event, data) =>handleChange("city", data.value)}
                    value={formik.values.city}
                  />
                  {formik.errors.dateTime && formik.touched.dateTime && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.city} /><br /><br /></span>}
                  <Form.Input
                      name="dateTime"
                      label="Randevu Tarihi"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("dateTime", data.value)}
                      value={formik.values.dateTime}
                    />
                  <br />
                  <Button circular fluid type="submit" color="yellow" content="Randevu Oluştur" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Doktor Randevusu Oluşturuldu" />
      </Container>
    </div>
  );
}