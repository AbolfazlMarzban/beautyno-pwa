import React, { useState } from "react";
import Navbar from "../../navbar";
import PServiceItems from "./pServiceItems";

export default function ProfileServices() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="text-xl font-bold">خدمات شما</h2>
        </div>
        <PServiceItems />
        <button
          className="mt-2 w-4/5 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          افزودن خدمت
        </button>
        {showModal ? (
          <>
            <div className="animate__animated animate__fadeInUp justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-x-0 bottom-0 z-50 outline-none focus:outline-none h-4/5">
              <div className="relative w-full max-w-3xl h-full">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold">لیست خدمات</h3>
                    <button
                      className="p-1 border-0 text-red-600 text-xl font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto w-full">
                    <form>
                      <div className="mb-6">
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          نام خدمت
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="نام خدمت خود را وارد کنید..."
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          رزوهای ارائه خدمت
                        </label>
                        <div className="flex gap-2">
                          <div className="basis-1/2">
                            <select
                              id="weekDays"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>از روز</option>
                              <option value="US">شنبه</option>
                              <option value="CA">یکشنبه</option>
                              <option value="FR">دوشنبه</option>
                              <option value="DE">سه شنبه</option>
                              <option value="DE">چهار شنبه</option>
                              <option value="DE">پنج شنبه </option>
                              <option value="DE">جمعه</option>
                            </select>
                          </div>
                          <div className="basis-1/2">
                            <select
                              id="weekDays"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>تا روز</option>
                              <option value="US">شنبه</option>
                              <option value="CA">یکشنبه</option>
                              <option value="FR">دوشنبه</option>
                              <option value="DE">سه شنبه</option>
                              <option value="DE">چهار شنبه</option>
                              <option value="DE">پنج شنبه </option>
                              <option value="DE">جمعه</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          ساعات ارائه خدمت
                        </label>
                        <div className="flex gap-2">
                          <div className="basis-1/2">
                            <label htmlFor="" className="text-sm">
                              {" "}
                              از ساعت
                            </label>
                            <input type="time" name="time" />
                          </div>
                          <div className="basis-1/2">
                            <label htmlFor="" className="text-sm">
                              {" "}
                              تا ساعت
                            </label>
                            <input type="time" name="time" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                    <button
                      className="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      ذخیره خدمت
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
}
