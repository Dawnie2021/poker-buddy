import { useQuery } from "@apollo/client";
// import queries
import { QUERY_SESSIONS } from "../utils/queries";
import { Link } from 'react-router-dom';

function ManageSessions() {
  // function to get data from the query
  const { data, loading, error } = useQuery(QUERY_SESSIONS);

  // variable to store the data
  const sessions = data?.sessions || [];

  // catch errors
  if (error) {
    throw Error(error);
  }

  // display loading message
  if (loading) {
    return <h2>Loading…</h2>;
  }

  // display the data
  // every session is displayed in the templated table format
  return (
    <>

<div className="flex justify-end">
  <Link to="/Session">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center m-5">
      <span>Add Session</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
    </button>
  </Link>
</div>

      {sessions.map((session) => (
        <div className="flex grid grid-cols-2 gap-3 ml-3 p-2">
          <div className="p-5 rounded-md shadow-lg">
            <table class="table-auto w-full">
              
            <thead>
              <td className="pl-3 text-lg font-bold">{session.location}</td>
                <th>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gray"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      className="inline-block align-text-top w-6 h-6 float-right"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </th>
                  <th>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="red" 
                    className="w-6 h-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg>
                  </th>
            </thead>

            <tbody className="text-sm">
              <tr>
                <td className="pl-3 text-gray-400">
                    {session.hoursPlayed} hours
                </td>
              </tr>
                <tr>
                  <td className="pl-3">$ {session.results}</td>
                </tr>
                <tr>
                  <td className="pl-3">{session.notes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

export default ManageSessions;
