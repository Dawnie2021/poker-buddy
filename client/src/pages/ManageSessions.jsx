import { useQuery } from "@apollo/client";
// import queries
import { QUERY_SESSIONS } from "../utils/queries";

function ManageSessions() {
  // function to get data from the query
  const { data, loading, error } = useQuery(QUERY_SESSIONS);

  // variable to store the data
  const sessions = data?.sessions || [];

  console.log(sessions);

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
      {sessions.map((session) => (
        <div className="flex grid grid-cols-2 gap-5 ml-3 p-2">
          <div className="p-5 rounded-md shadow-lg">
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th colSpan="2">
                    <h3 className="text-base font-bold leading-7 text-red-700">
                      Session Details
                    </h3>

                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="object-none object-right-top w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>
                    <strong>Date</strong>
                  </td>
                  <td className="pl-3">{session.startDate}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Location</strong>
                  </td>
                  <td className="pl-3">{session.location}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Results</strong>
                  </td>
                  <td className="pl-3">{session.results}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Hours</strong>
                  </td>
                  <td className="pl-3">{session.hoursPlayed}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Notes</strong>
                  </td>
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

//           <table className="table-auto w-full">
//           <div className="flex grid grid-cols-2 gap-5 ml-3">

//             <thead>
//               <tr>
//                 <th colSpan="2">
//                   <h3 className="text-base font-bold leading-7 text-red-700">
//                     Session Details
//                   </h3>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>
//                   <strong>Date</strong>
//                 </td>
//                 <td className="px-1 py-1 sm:grid sm:grid-cols-3">{session.startDate}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <strong>Location</strong>
//                 </td>
//                 <td className="px-1 py-1 sm:grid sm:grid-cols-3">{session.location}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <strong>Results</strong>
//                 </td>
//                 <td className="px-1 py-1 sm:grid sm:grid-cols-3">{session.results}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <strong>Hours</strong>
//                 </td>
//                 <td className="px-1 py-1 sm:grid sm:grid-cols-3">{session.hoursPlayed}</td>
//               </tr>
//               <tr>
//                 <td>
//                   <strong>Notes</strong>
//                 </td>
//                 <td className="flex flex-wrap px-1 py-1 sm:grid sm:grid-cols-3">
//                 {session.notes}
//                 </td>
//               </tr>
//             </tbody>
//           </div>
//           </table>
//         ))
//       }

//    </>
//   );
// }

export default ManageSessions;
