import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/">
          Home
        </Link>
        {/* <Link to="/me">
          {Auth.getProfile().data.username}&lsquo;s profile
        </Link> */}
        <Link to="/dashboard">
          Dashboard
        </Link>
        <Link to="/managesessions">
          Manage Sessions
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <Link to="/">
        Home
      </Link>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
    </>
  );
}

export default Navbar;