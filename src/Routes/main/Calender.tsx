import { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';

import AddModal from '../../Components/Modal/AddModal';
import {
  END_DATE, OPEN_EVENTMODAL, START_DATE, TIME_SLOT, GET_ALLEVENTS,
} from '../../redux/reducers/MainReducer';
// import AddModal from '../../Components/Modal/AddModal';

const localizer = momentLocalizer(moment);
function Calender() {
  const dispatch = useDispatch();
  const { isOpen, events } = useSelector((state: any) => state.main);
  const authToken = useSelector((state: any) => state.notify.authToken);
  // const Users = useSelector((state: any) => state.notify);
  const selectingEvent = (value: any) => {
    dispatch(OPEN_EVENTMODAL(!isOpen));
    // dispatch(START_DATE(new Date(value.start)));
    // dispatch(END_DATE(new Date(value.end)));
    dispatch(START_DATE(moment(value.start).format('YYYY-MM-DD')));
    dispatch(END_DATE(moment(value.end).format('YYYY-MM-DD')));
    dispatch(TIME_SLOT(value.slots));
  };

  useEffect(() => {
    dispatch(GET_ALLEVENTS(authToken));
  }, []);

  // const MonthEvent = (event: any) => (
  //   <div>
  //     <div>{event.start}</div>
  //     <div>{event.name}</div>
  //   </div>
  // );

  console.log('checking events here', events);
  return (
    <div className="container mx-auto">
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        showMultiDayTimes
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={selectingEvent}
        style={{ height: 700 }}
      />
      {
        isOpen
          ? (
            <div>
              <AddModal />
            </div>
          )
          : null
      }
    </div>
  );
}

export default Calender;
