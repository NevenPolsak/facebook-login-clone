import React from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function logout() {
    localStorage.removeItem("loggedin");
    history.push("/");
    window.location.reload(true);
  }

  function login() {
    const users = JSON.parse(localStorage.getItem("users"));

    let i = 0;
    for (let user of users) {
      if (user.username === username && user.password === password) {
        i++;
      }
    }

    if (i++) {
      alert("Login successful");
      localStorage.setItem("loggedin", "loggedin");
      history.push("/dashboard");
      window.location.reload(true);
    } else {
      alert("Invalid Login");
    }
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>FaceBook</h1>
        </div>

        <div className="col-md-6">
          {(() => {
            if (localStorage.getItem("loggedin")) {
              return <button onClick={logout}>LOGOUT</button>;
            } else {
              return (
                <div>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <button onClick={login}>LOGIN</button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
