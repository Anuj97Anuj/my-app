import React, { useState } from "react";

export default function Textform(props) {
  const [email, setEmail] = useState(props.email); // using array destructuring
  const [password, setPassword] = useState(props.password);

  //email = "anuj20@gmail.com"; // can't update state directly
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // console.log("email", email);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // console.log(setPassword);
    // console.log("password", password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email} password: ${password}`);
    props.showAlert(`success`, "success");
  };

  return (
    <>
      <div className="container">
        <form>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleEmail}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handlePassword}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
