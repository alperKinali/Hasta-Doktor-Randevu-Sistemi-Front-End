
import React from "react";
import HighlightedContent from "./HighlightedContent";

import { Divider, Icon } from "semantic-ui-react";
import ViewAllAppointmentsByAnnouncementDate from "./ViewAllAppointmentsByAnnouncementDate";
import DateList from "../pages/DateList";

export default function HomeLayout() {
  return (
    <div>
      <br />
      <br />
      <br />
      <HighlightedContent />
      <Divider horizontal>
        <Icon name="bell outline" /> Son Randevular
      </Divider>
      <br />
      <br />
      <DateList type="recently" itemsPerRow="3" />
      <ViewAllAppointmentsByAnnouncementDate/>


      
     
    </div>
  );
}
