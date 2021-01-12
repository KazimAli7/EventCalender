import { useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

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
        endAccessor="end"
        style={{ height: 700 }}
      />
    </div>
  );
}

export default Calender;
