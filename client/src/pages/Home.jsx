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
    
  
    
     <img src="https://tse3.mm.bing.net/th?id=OIP.sLQ6TwBFj7gyVNg8FzLk6QHaEo&pid=Api&P=0&h=220" width="100%"></img>
  
  );
}

export default Home;

// https://tse3.mm.bing.net/th?id=OIP.VYVNwb8A4s4smdNvrEu-8wHaFM&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.n0UJok-JIPgmGkYdEdit-QHaEo&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.RSYOhHxgeAQtFogIvQan4QHaE8&pid=Api&P=0&h=220
// https://tse3.mm.bing.net/th?id=OIP.sLQ6TwBFj7gyVNg8FzLk6QHaEo&pid=Api&P=0&h=220

