import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import UserList from "../components/UserList";

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }
  

  return (
    
  
    
     <img src="https://img.freepik.com/free-vector/poker-game-background-with-playing-cards_1017-33703.jpg" alt="poker"></img>
  
  );
}

export default Home;