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
    
  
    
     <img src="https://img.freepik.com/free-vector/poker-game-background-with-playing-cards_1017-33703.jpg" width="100%"></img>
  
  );
}

export default Home;

// https://tse3.mm.bing.net/th?id=OIP.VYVNwb8A4s4smdNvrEu-8wHaFM&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.n0UJok-JIPgmGkYdEdit-QHaEo&pid=Api&P=0&h=220
// https://tse1.mm.bing.net/th?id=OIP.pBU4Pjw8sCImI5JqRK-pyQHaFL&pid=Api&P=0&h=220
// https://tse2.mm.bing.net/th?id=OIP.RSYOhHxgeAQtFogIvQan4QHaE8&pid=Api&P=0&h=220
// https://tse3.mm.bing.net/th?id=OIP.sLQ6TwBFj7gyVNg8FzLk6QHaEo&pid=Api&P=0&h=220
// https://tse4.mm.bing.net/th?id=OIP.Bj-zHHqy_dEXc-KFeRcDAwHaEK&pid=Api&P=0&h=220
// https://tse1.mm.bing.net/th?id=OIF.JNRCDy3fafWnkpasnOk1VA&pid=Api&P=0&h=220