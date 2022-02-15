import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import Navi from "./Navi.jsx"
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import HomeLayout from "./HomeLayout";
import PatientAdd from "../pages/PatientAdd"
import DoctorAdd from "../pages/DoctorAdd";
import { Switch, Route } from 'react-router-dom';
import AppointmentsLayout from './AppointmentsLayout.jsx';
import PatientLayout from './PatientLayout.jsx';
import DoctorLayout from './DoctorLayout.jsx';
import AboutLayout from './AboutLayout.jsx';
import DoctorDetail from '../pages/DoctorDetail.jsx';
import DateAdd from "../pages/DateAdd";
import PatientDetail from '../pages/PatientDetail.jsx';
import DateList from '../pages/DateList';
import DateLayout from './DateLayout.jsx';
import DateDetail from '../pages/DateDetail.jsx';

export default function Dashboard() {
    return (
        <Container className="dashboard">
            <Switch>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/home" component={HomeLayout} />
                <Route path="/patient/add" component={PatientAdd} />
                <Route path="/doctor/add" component={DoctorAdd} />
                <Route exact path="/appointments" component={AppointmentsLayout} />
                <Route exact path="/patients" component={PatientLayout} />
                <Route exact path="/doctors" component={DoctorLayout} />
                <Route exact path="/doctors/doctor/:id/" component={DoctorDetail} />
                <Route exact path="/doctors/doctor/:id/date/add" component={DateAdd} />
                <Route exact path="/patients/patient/:id/" component={PatientDetail} />
                <Route exact path="/dates" component={DateLayout}/>
                <Route exact path="/dates/date/:id" component={DateDetail} />
                <Route exact path="/aboutUs" component={AboutLayout} />
            </Switch>
        </Container>
    )
}
