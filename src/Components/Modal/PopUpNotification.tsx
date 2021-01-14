function PopUpModal() {
  return (
    <div className="bg-white rounded md:w-1/3 w-1/2 border shadow-lg">
      <div className="rounded-t bg-teal-500">
        <div className="relative py-3 px-2 flex">
          <span className="font-semibold text-white md:text-base text-sm">Popup Title</span>
          <div className="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg bg-white z-10 p-1 rounded-full p-2">
            <img src="https://image.flaticon.com/icons/svg/151/151882.svg" alt="cross icon" className="w-2 h-2" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
        <p>Popup Messages</p>
      </div>
      <div className="p-2 flex justify-end rounded-b">
        <button type="button" className="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-blue-700 hover:bg-blue-600 text-white rounded">OK</button>
        <button type="button" className="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded">Cancel</button>
      </div>
    </div>
  );
}

export default PopUpModal;
