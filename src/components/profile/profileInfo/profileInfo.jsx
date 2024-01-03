import Navbar from "../../navbar";

export default function ProfileInfo() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl">
        <div className="w-full flex flex-col items-start gap-2 justify-center">
          <label htmlFor="">Full Name</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <label htmlFor="">Phone Number</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <label htmlFor="">Email</label>
          <input type="text" className="p-2 border rounded-lg w-full" />
          <button className="bg-green-400 p-3 rounded-lg text-white w-full mt-4">
            Save
          </button>
        </div>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
