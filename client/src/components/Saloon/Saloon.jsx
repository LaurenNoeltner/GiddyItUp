import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Saloon.css";
import DeputyOne from "../../images/DeputyGirl.png"; // Tell Webpack this JS file uses this image
import DeputyTwo from "../../images/DeputyBoy.png";
import DeputyThree from "../../images/DeputyFemale.png";
import DeputyFour from "../../images/DeputyMask.png";
import Sheriff from "../../images/SheriffMom.png";
class Saloon extends Component {
  render() {
    return (
      <div className="bg-img">
        <div className="row saloon-card"></div>
        <div className="row">
          <div className="col-1"></div>
          <div className="card col-3 deputy-card ">
            <div className="card-body">
              <h5 className="card-title">DEPUTY</h5>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={DeputyOne}
                      alt="DeputyOne"
                      width="150"
                      height="200"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={DeputyTwo}
                      alt="DeputyTwo"
                      width="150"
                      height="200"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={DeputyThree}
                      alt="DeputyThree"
                      width="150"
                      height="200"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={DeputyFour}
                      alt="DeputyFour"
                      width="150"
                      height="200"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="board-link">
                <NavLink to="/Bounty" activeClassName="selected">
                  Bounty Board
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="card col-3 sheriff-card">
            <div className="card-body">
              <h5 className="card-title">SHERIFF</h5>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Sheriff} alt="Sheriff" width="150" height="200" />
                  </div>
                </div>
              </div>
              <div className="board-link">
                <NavLink
                  to="/ParentBounty"
                  activeClassName="selected"
                  id="board-link"
                >
                  Sheriff's Board
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
}
export default Saloon;
