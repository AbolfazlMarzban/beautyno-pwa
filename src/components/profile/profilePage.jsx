import Navbar from "../navbar";
import { Link } from "react-router-dom";

export default function ProfilePage({}) {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 flex flex-col">
          <Link to="/user" className="w-full">
          <button className="bg-pink-500 text-white hover:bg-pink-600 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Go to my profile
            </button>
          </Link>
          <Link to="/profile/info" className="w-full">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Profile Info
            </button>
          </Link>
          <Link to="/profile/orders" className="w-full">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Orders
            </button>
          </Link>

          <Link to="/profile/services" className="w-full">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Your Services
            </button>
          </Link>
          <Link to="/Favourites" className="flex">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Your Favourites
            </button>
          </Link>

          <Link to="/profile/support" className="w-full">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
              Support
            </button>
          </Link>

          <button className="bg-red-600 hover:bg-red-300 text-white font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2">
            Sign out
          </button>
        </div>
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
