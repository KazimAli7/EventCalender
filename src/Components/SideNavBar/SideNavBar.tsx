/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { DELETE_EVENT, OPEN_SIDEBAR } from '../../redux/reducers/MainReducer';

function SideNavBar() {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state: any) => state.main.selectedEvent);

  const deleteIcon = () => {
    dispatch(DELETE_EVENT(selectedEvent.id));
  };

  return (
    <div className="fixed z-30 inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <section className="absolute inset-y-0 right-0 pl-10 max-w-6xl flex" aria-labelledby="slide-over-heading">
          <div className="relative w-screen max-w-xs">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6 flex justify-end">
                <div onClick={() => deleteIcon()}>
                  <svg className="h-6 w-6 mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div onClick={() => dispatch(OPEN_SIDEBAR(false))}>
                  X
                </div>
              </div>
              <div className="my-4 relative flex-1 px-4 sm:px-6">
                <div>
                  <h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
                    {selectedEvent.title}
                  </h2>
                </div>
                <div className="px-0 sm:px-0 my-4 flex justify-between">
                  <svg className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm:ss a')}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SideNavBar;
