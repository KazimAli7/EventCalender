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
    dispatch(START_DATE(value.start));
    dispatch(END_DATE(value.end));
    dispatch(TIME_SLOT(value.slots));
  };

  useEffect(() => {
    dispatch(GET_ALLEVENTS(authToken));
  }, [events]);

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
