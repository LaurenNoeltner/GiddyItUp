import React, { useState } from "react";
import "./AuthForm.css"

const AuthForm = ({ buttonText, buttonSign, handleSubmit, slug }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, emailAddress, password);
      }}
    >
      <div className="form-group">
        <label htmlFor="signup-email">Email address</label>
        <input
          type="email"
          className="form-control"
          id={`${slug}-emailAddress`}
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="enter-password" htmlFor="signup-password">Password</label>
        <input
          type="password"
          className="form-control"
          id={`${slug}-password`}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col">
      <div class="btn-toolbar text-center">
        <button type="submit" className="btn btn-light btn-lg">
          {buttonText}
        </button>
        <hr/>
        <button type="submit" className="btn btn-light btn-lg">
          {buttonSign}
        </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
