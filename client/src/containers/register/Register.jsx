import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { createUser, getJobs } from "../../redux/actions/actions";

export default function Register() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
    //   console.log(jobs);
  }, []);

  const jobsDB = useSelector((state) => state.jobs);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    user: "",
    password: "",
    city: "",
    phone: 0,
    address: "",
    role: "",
  });
  const [inputJob, setInputJob] = useState([]);

  //   const _jobs = ["Albañil", "Pintor", "Carpintero"];
  //   let _jobs = jobs;

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(jobsDB);
    setInput({ ...input, [name]: value });
  };

  const changeInputJob = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(inputJob);
    setInputJob({ ...inputJob, [name]: inputJob[name].concat(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate();
    // console.log({
    //   user: input,
    //   jobs: inputJob,
    // });
    dispatch(
      createUser({
        user: input,
        jobs: inputJob,
      })
    );
  };

  return (
    <>
      <h1>Register</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h2>Complete all fields</h2>
              <hr></hr>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={input.firstName}
                  onChange={changeInput}
                />
              </div>
              <hr></hr>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={input.lastName}
                  onChange={changeInput}
                />
              </div>
              <hr></hr>
              <div>
                <label>email: </label>
                <input
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={changeInput}
                />
              </div>
              <hr></hr>
              <div>
                <label>user</label>
                <input
                  type="text"
                  name="user"
                  value={input.user}
                  onChange={changeInput}
                />
              </div>
              <hr></hr>
              <div>
                <label>password:</label>
                <input
                  type="text"
                  name="password"
                  value={input.password}
                  onChange={changeInput}
                ></input>
              </div>
              <hr></hr>
              <div>
                <label>city:</label>
                <input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeInput}
                ></input>
              </div>
              <hr></hr>
              <div>
                <label>phone: </label>
                <input
                  type="text"
                  name="phone"
                  value={input.phone}
                  onChange={changeInput}
                ></input>
              </div>
              <hr></hr>
              <div>
                <label>address: </label>
                <input
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={changeInput}
                ></input>
              </div>
              <hr></hr>
              <div>
                <label>role: </label>
                <input
                  type="text"
                  name="role"
                  value={input.role}
                  onChange={changeInput}
                ></input>
              </div>
            </div>
            <hr></hr>
            <div>
              <label>Jobs: </label>
              <div>
                {jobsDB.map((job) => (
                  <label key={job.name}>
                    {job.name}
                    <input
                      type="checkbox"
                      name="jobs"
                      value={job.name}
                      onChange={changeInputJob}
                    />
                    <span></span>
                  </label>
                ))}
              </div>
            </div>

            <div class="mt-3">
              <button
                type="submit"
                name="btn"
                class="border-2 border-green-700 bg-green-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-green-700 font-semibold"
              >
                Add User
              </button>
            </div>
          </div>
        </form>
        <div class="mt-3">
          <NavLink to="/">
            <button class="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-700 font-semibold">
              Volver
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
