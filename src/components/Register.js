import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupUser} from "../redux/UserReducer";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ name, email, password }));
    console.log({ name, email, password });
    history.push("/login")
  };

  return (
    <div id="register">
      <form className="registerContainer" onSubmit={submit}>
        <input
          type="text"
          className="registerInpt"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="email"
          className="registerInpt"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          className="registerInpt"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <br />
          <button type="submit" className="registerBtn">
            REGISTER
          </button>
        <span className="txt">Already have an account ?</span>
        <Link className="links" to="/login">
          <button className="registerBtn2" type="submit">
            Login
          </button>
        </Link>
      </form>
     
    </div>
  );
}

export default Register;
