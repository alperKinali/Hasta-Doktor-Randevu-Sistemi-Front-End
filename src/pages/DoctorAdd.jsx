import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import DoctorService from "./../services/DoctorService";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function DoctorAdd() {
  const [open, setOpen] = useState(false);

  let doctorService = new DoctorService();

  const initialValues = {
    firstName: "",
    lastName: "",
    hospitalName: "",
    hospitalAddress: "",
    doctorDegree: "",
    doctorTitle: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required Field"),
    lastName: Yup.string().required("Required Field"),
    hospitalName: Yup.string().required("Required Field"),
    hospitalAddress: Yup.string().required("Required Field"),
    doctorDegree: Yup.string().required("Required Field"),
    doctorTitle: Yup.string().required("Required Field"),
    email: Yup.string().email("Not a Valid Email").required("Required Field"),
    password: Yup.string().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    doctorService.register(values);
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
        <Headline content=" Doktor Kayıt" />

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
                  <Form.Input
                    name="hospitalName"
                    label="Hatane Adı"
                    onChange={(event, data) => handleChange("hospitalName", data.value)}
                    value={formik.values.hospitalName}
                  />
                  {formik.errors.hospitalName && formik.touched.hospitalName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.hospitalName} /><br /><br /></span>}
                  <Form.Input
                    name="hospitalAddress"
                    label="Hatane Adresi"
                    onChange={(event, data) => handleChange("hospitalAddress", data.value)}
                    value={formik.values.hospitalAddress}
                  />
                  {formik.errors.hospitalAddress && formik.touched.hospitalAddress && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.hospitalAddress} /><br /><br /></span>}
                  <Form.Input
                    name="doctorDegree"
                    label="Doktor Derecesi"
                    onChange={(event, data) => handleChange("doctorDegree", data.value)}
                    value={formik.values.doctorDegree}
                  />
                  {formik.errors.doctorDegree && formik.touched.doctorDegree && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.doctorDegree} /><br /><br /></span>}
                  <Form.Input
                    name="doctorTitle"
                    label="Doktor Ünvanı"
                    
                    onChange={(event, data) => handleChange("doctorTitle", data.value)}
                    value={formik.values.doctorTitle}
                  />
                  {formik.errors.doctorTitle && formik.touched.doctorTitle && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.doctorTitle} /><br /><br /></span>}
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
                    label="şifre"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /><br /></span>}
                  
                  <br />

                  <Button circular fluid type="submit" color="yellow" content="Kaydol" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Kayıt işlemi Gerçekleştirildi" />
      </Container>
    </div>
  );
}