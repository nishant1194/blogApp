
import React, { useState } from 'react'
import '../login/loginn.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../user/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';




function Loggin() {
  const [email, setEmail] = useState(" ");
  const [userPassword, setuserPassward] = useState(" ");
  const navigate = useNavigate();
 const SubmitHandler = (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Check if email and password are defined
  if (!email || !userPassword) {
    alert("Please enter both email and password");
    return;
  }

  axios
    .post("https://blog-app-api-ten.vercel.app/auth/login", {
      email: email,
      password: userPassword,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.token !== undefined) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("fullName", res.data.fullName);
        localStorage.setItem("email", res.data.email);
        alert("Login successfully");
        navigate("/");
      } else {
        alert("Wrong email or password");
      }
    })
    .catch((err) => {
      console.log(err);
      alert("An error occurred during login. Please try again.");
    });
};


    return (
    <div>
      <Navbar />
      <div className="loginContainer">
        <div className="loginBox">
          <form>
            <h1 align="center">Login for Blog App</h1>
            <input
              placeholder="E-mail"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="password"
              className="input"
              type="password"
              onChange={(e) => {
                setuserPassward(e.target.value);
              }}
            />
            <button
              type="submit"
              className="submitBtn "
              onClick={SubmitHandler}
            >
              Login
            </button>
            <Link to="/admin/signup">
              <button className="submitBtn ">SignUp </button>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loggin;

