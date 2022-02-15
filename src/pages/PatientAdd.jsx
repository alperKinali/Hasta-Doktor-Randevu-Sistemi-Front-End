import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import PatientService from "./../services/PatientService";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";
export default function PatientAdd() {
  const [open, setOpen] = useState(false);
  let patientService = new PatientService();
  const initialValues = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    ageOfYear: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required Field"),
    lastName: Yup.string().required("Required Field"),
    identityNumber: Yup.string().length(11 ,"Not 11 Characters in Length").required("Required Field"),
    ageOfYear: Yup.date().required("Required Field"),
    email: Yup.string().email("Not a Valid Email").required("Required Field"),
    password: Yup.string().required("Required Field"),
  });
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    patientService.register(values);
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
        <Headline content="Hasta Kayıt" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="firstName"
                    label="Ad"
                    onChange={(event, data) => handleChange("firstName", data.value)}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.firstName} /><br /><br /></span>}
                  <Form.Input
                    name="lastName"
                    label="Soyad"
                    onChange={(event, data) => handleChange("lastName", data.value)}
                    value={formik.values.lastName}
                  />
                  {formik.errors.lastName && formik.touched.lastName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.lastName} /><br /><br /></span>}
                  <Form.Group widths="equal">
                    <Form.Input
                      name="identityNumber"
                      label="TC Kimlik Numarası"
                      placeholder="XXXXXXXXXXX"
                      onChange={(event, data) => handleChange("identityNumber", data.value)}
                      value={formik.values.identityNumber}
                    />
                    <Form.Input
                      name="ageOfYear"
                      label="Doğum Yılı"
                      placeholder="YYYY"
                      onChange={(event, data) => handleChange("ageOfYear", data.value)}
                      value={formik.values.dateOfBirth}
                    />
                  </Form.Group>
                  <Grid>
                    <Grid.Row columns="equal">
                      <Grid.Column>
                        {formik.errors.identityNumber && formik.touched.identityNumber && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.identityNumber} /><br /><br /></span>}
                      </Grid.Column>
                      <Grid.Column>
                        {formik.errors.dateOfBirth && formik.touched.dateOfBirth && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.dateOfBirth} /><br /><br /></span>}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Form.Input
                    name="email"
                    label="E-mail"
                    placeholder="example@example.com"
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.email} /><br /><br /></span>}
                  <Form.Input
                    name="password"
                    label="Şifre"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /><br /></span>}
                  
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content="Kayıt Oluştur " />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Kayıt Oluşturuldu." />
      </Container>
    </div>
  );
}