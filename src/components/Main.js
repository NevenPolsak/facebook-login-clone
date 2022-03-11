import React, { useState } from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      name: name,
      username: username,
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration is successful");
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="logo"
          />
        </div>

        <div className="col-md-4">
          <h1>Register</h1>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input type="submit" className="btn btn-primary" value="SIGN UP" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
