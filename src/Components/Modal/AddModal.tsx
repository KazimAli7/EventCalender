import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
// import {} from 'multiselect-react-dropdown'

import { ADD_TITLE, CLOSE_EVENTMODAL, ADD_EVENT } from '../../redux/reducers/MainReducer';

function AddModal() : any {
  const dispatch = useDispatch();
  const {
    isOpen, title, start, end,
  } = useSelector((state: any) => state.main);
  const authToken = useSelector((state: any) => state.notify.authToken);

  const handleSubmit = () => {
    const EventInfo = {
      title,
      start,
      end,
      authToken,
    };
    dispatch(ADD_EVENT(EventInfo));
  };
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      {
          isOpen
            ? (
              <div className="relative w-96 my-6 mx-auto max-w-5xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <input
                      id="title"
                      type="text"
                      name="event-title"
                      value={title}
                      onChange={(e) => dispatch(ADD_TITLE(e.target.value))}
                      placeholder="Add event title"
                      className="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      required
                    />
                    <div>
                      {moment(start).format('DD-MMMM-YYYY')}
                      {' '}
                      -
                      {' '}
                      {moment(end).format('DD-MMMM-YYYY')}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => dispatch(CLOSE_EVENTMODAL(false))}
                    >
                      Close
                    </button>
                    <button onClick={() => handleSubmit()} type="button" className=" py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                      Click me
                    </button>
                  </div>
                </div>
              </div>
            )
            : null
        }
    </div>
  );
}

export default AddModal;
