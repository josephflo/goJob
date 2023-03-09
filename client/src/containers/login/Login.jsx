import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogin } from "../../redux/actions/actions";

export default function Login() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    user: "",
    password: "",
  });

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(input);
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
    setInput({
      user: "",
      password: "",
    });
  };
  return (
    <>
      <h1>Login</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div>
          <label>user</label>
          <input
            type="text"
            name="user"
            value={input.user}
            onChange={changeInput}
          />
        </div>
        <div>
          <label>password:</label>
          <input
            type="text"
            name="password"
            value={input.password}
            onChange={changeInput}
          ></input>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            name="btn"
            className="border-2 border-yellow-700 bg-yellow-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-yellow-700 font-semibold"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-3">
        <NavLink to="/">
          <button className="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
            Volver
          </button>
        </NavLink>
      </div>
    </>
  );
}
