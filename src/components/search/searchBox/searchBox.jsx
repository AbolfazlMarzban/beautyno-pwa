import React, { useState } from "react";

function SearchBox() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <>
      <div className="sm:hidden px-4 py-2">
        <button
          className="mt-2 w-full bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowSearchBox(true)}
        >
          Search
        </button>
      </div>
      <div className="flex justify-around p-4 max-sm:hidden">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Username</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Name</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Day</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="">Service Time</label>
          <input type="text" className="border rounded-lg p-2" />
        </div>
      </div>
      {showSearchBox && (
        <></>
      )}
    </>
  );
}

export default SearchBox;
