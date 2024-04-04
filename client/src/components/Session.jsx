import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

import { useQuery } from '@apollo/client';

import ManageSession from '../pages/ManageSessions';

import { QUERY_SESSION } from '../utils/queries';
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Session() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col py-3 min-h-screen bg-gradient-to-r from-red-500 via-red-400 to-red-300 ...">
      <div className="flex justify-center ...">
        <form
          action="#"
          method="POST"
          className="mx-auto -16 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="start-date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Start Date
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="start-date"
                  id="start-date"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="end-date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                End Date
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="end-date"
                  id="end-date"
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
                  type="results"
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
