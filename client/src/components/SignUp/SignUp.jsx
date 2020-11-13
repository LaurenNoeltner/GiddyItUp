import React, { useEffect, useState } from "react";
// import AuthContext from "../context/AuthContext";
import API from "../utils/UserAPI";
// import AuthForm from "../AuthForm/AuthForm";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
  const [state, setState] = useState({
    emailAddress: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const history = useHistory();

  useEffect(() => {
    const id = sessionStorage.getItem("currentUsers");
    if (id) {
      history.push("/Saloon");
    }
  }, [history]);

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.password !== state.passwordConfirm) {
      alert("Passwords do not match, please re-enter");
      return;
      //can do other if statements here with first name required, etc.
    }
    if (!state.firstName) {
      alert("All fields required.  Please enter your first name");
      return;
    }
    if (!state.lastName) {
      alert("All fields required.  Please enter your last name");
      return;
    }
    if (!state.password) {
      alert("Please enter a password");
      return;
    }
    if (!state.email) {
      alert(
        "Please confirm your email address"
      );
      return;
    }
    API.signup(state)
      .then((response) => {
        sessionStorage.setItem("currentUsers", response.data.data._id);
        //using the useHistory hook to redirect without refreshing
        history.push("/login");
      })
      .catch((err) => {
        throw err;
      });
    setState({
      emailAddress: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div className="container sign-up-form">
      <div className="row form-margin">
      </div>
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="welcome text-center"> 🐎  Sign up 🐎</h1>
            <h3 className="text-center">You must be a parent to create an account! 🚨</h3>
          </div>
        </div>
        <section className="row">
        <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form
              onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  value={state.firstName}
                  name="firstName"
                  type="text"
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="enterFirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  value={state.lastName}
                  name="lastName"
                  type="text"
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="enterLastName"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  value={state.email}
                  name="email"
                  type="email"
                  //only accepts a formatted date
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="userEmail"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  value={state.password}
                  name="password"
                  type="password"
                  //in twice so a user can confirm password
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="examplePassword"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  value={state.passwordConfirm}
                  name="passwordConfirm"
                  type="password"
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="exampleConfirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <br/>
              <div className="row create-acct">
                <div className="col text-center">
                <Link
                  type="submit"
                  className="btn btn-light button sign-in-btn create-acct-btn"
                  to="/"
                >
                  CREATE ACCOUNT
              </Link>
                </div>
               
              </div>

            </form>
          </div>
        </section>


      </div>

    </div>

  );
};

export default SignUp;
