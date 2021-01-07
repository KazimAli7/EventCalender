/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';

// PACKAGES
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// COMPONENTS
// eslint-disable-next-line import/no-unresolved
// import AddModal from '../Components/Modal/AddModal';
// import events from '../../common/events'

// COMPONENTS

const localizer = momentLocalizer(moment);
function Calender() {
  const [events] = useState([]);

  // const AddEvent = () => {
  //   console.log('value come here', value.end, value.start);
  //   setStartDate(moment(value.start).format('MMMM, Do YYYY'));
  //   setEndDate(moment(value.end).format('MMMM, Do YYYY'));
  //   SetOpen(true);
  // };

  //   const EditEvent = (value) => {
  //     console.log('value come here', value);
  //   };

  //   const eventStyleGetter = (event, start, end, isSelected) => {
  //     const style = {
  //       backgroundColor: isSelected ? 'yellow' : 'red',
  //       borderRadius: '0px',
  //       opacity: 0.8,
  //       color: 'white',
  //       border: '0px',
  //       display: 'block',
  //     };
  //     return {
  //       style,
  //     };
  //   };
  return (
    <div className="container mx-auto p-12">
      <Calendar
        localizer={localizer}
          // view="month"
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
