import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToken, logOut } from "../redux/UserReducer";

const Navigation = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.currrentUser.token);
  const isLoggedIn=useSelector((state ) => state.currentUser.isSuccess)
  console.log(isLoggedIn)
  const email = useSelector((state) => state.currentUser.email);
  const token=null;

  useEffect(() => dispatch(addToken()), []);
  const logout = () => {
    dispatch(logOut());
  };
  return (
    <nav className="appLink">
      <h1>BlazZze</h1>
      <Link className="links" to="/">
        Home{email}
      </Link>
      {isLoggedIn ? (
        <Link className="links" to="/login">
          <button className="appBtn" onClick={logout}>
            LogOut
          </button>
        </Link>
      ) : (
        <div className="log-reg">
          <Link className="links" to="/login">
            <button className="appBtn">Login</button>
          </Link>
          <Link className="links" to="/register">
            <button className="appBtn">Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
