import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e, emailAddress, password) => {
    e.preventDefault();
    axios
      .post("/api/signup", { emailAddress, password })
      .then((response) => {
        console.log(response.data);
        setJwt(response.data.data);
        history.push("/books");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <AuthForm
            handleSubmit={handleSubmit}
            buttonText="Create Account"
            slug="signup"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
