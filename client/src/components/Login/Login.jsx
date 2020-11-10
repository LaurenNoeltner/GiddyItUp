import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import AuthForm from "../AuthForm/AuthForm";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();

  //TODO: Figure out how to avoid unintended Protected Routes
  //   useEffect(() => {
  //     if (jwt) {
  //       history.goBack();
  //     }
  //   }, [jwt]);

  const handleSubmit = (e, emailAddress, password) => {
    e.preventDefault();
    axios
      .post("/api/login", { emailAddress, password })
      .then((response) => {
        console.log(response.data);
        setJwt(response.data.data);
        history.push("/Saloon");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Howdy Partner!</h1>
          <h3>Go on and check in below</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <AuthForm
            handleSubmit={handleSubmit}
            buttonText="Sign In"
            slug="login"
            buttonSign="Sign Up"
            slug="signup"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
