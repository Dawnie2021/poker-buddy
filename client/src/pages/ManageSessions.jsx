import { useQuery } from "@apollo/client";
// import queries
import { QUERY_SESSIONS } from "../utils/queries";

function ManageSessions() {
  // function to get data from the query
  const { data, loading, error } = useQuery(QUERY_SESSIONS);

  // variable to store the data
  const sessions = data?.sessions || [];

  console.log(sessions)

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
    <div className="flex grid grid-cols-2 gap-5 ml-3">
    
        {
        sessions.map((session) => (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th colSpan="2">
                  <h3 className="text-base font-bold leading-7 text-red-700">
                    Session Details
                  </h3>
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
                <td className="pl-3">
                {session.notes}
                </td>
              </tr>
            </tbody>
          </table>
        ))
      }
    </div>
  
  );
}

export default ManageSessions;
