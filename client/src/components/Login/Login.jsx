import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import AuthForm from "../AuthForm/AuthForm";
import { useHistory } from "react-router-dom";
import "./Login.css"

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
      <div className="row login-jumbotron">
        <br /><br />
      </div>
      <div className="jumbotron">
        <div className="row">
          <div className="col text-center">
            <h1 className="welcome">Howdy Partner!</h1>
            <h3>Go on and check in below.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 login-signup">
            <AuthForm
              handleSubmit={handleSubmit}
              buttonText="Sign In"
              slug="login"
              buttonSign="Sign Up"
              slug="signup"
            />
          </div>
          <div className="col-sm-12">
          <hr className="my-4" />
          <h5 className="my-2 text-center" >Hold on little fella!</h5>
          <h6 className="my-2 text-center">Do you have permission from your parents?</h6>
          <h6 className="my-2 text-center">If not, go wrangle them up and lets get this started!</h6>
          </div>
          
        </div>
      </div>
    </div>

  );
};

export default Login;
