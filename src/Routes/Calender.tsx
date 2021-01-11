/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

// PACKAGES
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// COMPONENTS
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import AddModal from '../Components/Modal/AddModal';
// import events from '../../common/events'

const localizer = momentLocalizer(moment);
function Calender() {
  const [events] = useState([]);
  return (
    <div className="container mx-auto p-12">
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        showMultiDayTimes
        startAccessor="start"
        // onSelectSlot={AddEvent}
        // onSelectEvent={EditEvent}
        endAccessor="end"
        // eventPropGetter={(eventStyleGetter)}
        style={{ height: 700 }}
      />
      {/* <AddModal isOpen={isOpen} /> */}
    </div>
  );
}

export default Calender;
