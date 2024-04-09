import { useState, useRef } from "react";

import { useMutation } from "@apollo/client";

import { ADD_SESSION } from "../utils/mutations";

export default function Session() {
  const [agreed, setAgreed] = useState(false);

  const [addSession, { error }] = useMutation(ADD_SESSION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const variables = Object.fromEntries(formData);

    variables.results = Number(variables.results);
    variables.hoursPlayed = Number(variables.hoursPlayed);

    console.log(variables);

    try {
      const { data } = await addSession({
        variables: variables,
      });

      window.location.assign("/ManageSessions");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col py-3 min-h-screen bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 ...">
      <div className="flex justify-center ...">
        <form
          className="mx-auto -16 max-w-xl sm:mt-10"
          onSubmit={handleFormSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Start Date
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  defaultValue={new Date().toISOString().substr(0, 10)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="hoursPlayed"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Hours Played
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="hoursPlayed"
                  id="hoursPlayed"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="results"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Results
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="results"
                  id="results"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="notes"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Notes
              </label>
              <div className="mt-2.5">
                <textarea
                  name="notes"
                  id="notes"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-md bg-gray-900 px-.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
