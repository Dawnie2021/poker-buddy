import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      );
    }
    return (
      <div class="flex justify-center p-20">
      <form class="space-x-2" onSubmit={handleFormSubmit}>
        <input class ="border-solid border-2 border-red-700 ..."
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
        <input class ="border-solid border-2 border-red-700 ..."
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input class ="border-solid border-2 border-red-700 ..."
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit" class="bg-red-700 hover:bg-red-500 text-black-900 font-semibold hover:text-white py-1 px-2 border border-red-800 hover:border-transparent rounded">
          SignUp
        </button>
      </form>
      </div>
    );
  };

  return (
    <main>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
