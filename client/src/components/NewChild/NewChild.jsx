import API from "../utils/ChildAPI";
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NewChild.css"
import DeputyOne from "../../images/DeputyGirl.png"; // Tell Webpack this JS file uses this image
import DeputyTwo from "../../images/DeputyBoy.png";
import DeputyThree from "../../images/DeputyFemale.png";
import DeputyFour from "../../images/DeputyMask.png";
import DeputyFive from "../../images/DeputyTeen.png";


function NewChild() {
  const [children, setChild] = useState([]);
  const [childObject, setChildObject] = useState({});

  useEffect(() => {
    loadChild();
  }, []);

  

  function loadChild() {
    API.getChild()
      .then((res) => {
        console.log(res);
        setChild(res.data);
        console.log("this is children", children);
      })
      .catch((err) => console.log(err));
  }

  function deleteChild(id) {
    API.deleteChild(id)
      .then((res) => loadChild())
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setChildObject({ ...childObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(childObject);
    if (childObject.firstName && childObject.lastName) {
      API.saveChild({
        firstName: childObject.firstName,
        lastName: childObject.lastName,
        age: childObject.age,
        avatar: childObject.avatar

      })
        .then((res) => loadChild())
        .catch((err) => console.log(err));
    }
  }

  return (

    <div className="container new-child-form">
      <div className="row new-child-row "></div>
      <div className="row jumbotron-margin">

        <div className="col-md-5">
          <div className="jumbotron w-100 d-flex flex-column">
            <div className="row">
              <div className="col text-center">
                <h1 className="create-child">Add your Deputy</h1>
                <h3> Enter your child's information below.</h3>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center">

                <form>

                  <div className="form-group">
                    <input
                      name="firstName"
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      id="childFirstName"
                      placeholder="Add Deputy's First Name"
                    >
                    </input>
                  </div>

                  <div className="form-group">
                    <input
                      name="lastName"
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      id="childLastName"
                      placeholder="Add Deputy's Last Name"
                    >
                    </input>
                  </div>

                  <div className="form-group">
                    <input
                      name="age"
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      id="childAge"
                      placeholder="Add Deputy's Age"
                    >
                    </input>
                  </div>

                  <div className="form-group">
                    
                    <select name="avatar" onChange={handleInputChange}

                    >
                      <option value="DeputyGirl">Deputy 1</option>
                      <option value="DeputyBoy">Deputy 2</option>
                      <option value="DeputyFemale">Deputy 3</option>
                      <option value="DeputyMask">Deputy 4</option>
                      <option value="DeputyTeen">Deputy 5</option>

                    </select>


                  </div>

                  <h6 className="instructions"> Sort through the carousel to view available Avatars for your child.</h6>

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
                    <div className="carousel-inner carousel-align">
                      <div className="carousel-item active">
                        <img
                          src={DeputyOne}
                          alt="DeputyOne"
                          width="150"
                          height="200"
                        /><div>Deputy 1</div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={DeputyTwo}
                          alt="DeputyTwo"
                          width="150"
                          height="200"
                        /><div>Deputy 2</div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={DeputyThree}
                          alt="DeputyThree"
                          width="150"
                          height="200"
                        /><div>Deputy 3</div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={DeputyFour}
                          alt="DeputyFour"
                          width="150"
                          height="200"
                        /><div>Deputy 4</div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={DeputyFive}
                          alt="DeputyFive"
                          width="150"
                          height="200"
                        /><div>Deputy 5</div>
                      </div>

                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                      onClick={() => avatarChanged("Coco1")}
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
                      onClick={() => avatarChanged("Coco2")}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>


                  <div className="row">
                    <div className="col text-center">
                      <button
                        onClick={handleFormSubmit}
                        id="addChild"
                        className="btn btn-light save-button"
                      >
                        SAVE DEPUTY
                      </button>
                    </div>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>

        <div className="col-md-7">
          <div className="jumbotron all-children w-100 d-flex flex-column">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="create-child">Deputy List</h1>
                <h3> Click on the picture to go to Deputy Bounty Board.</h3>
              </div>
            </div>

            <div className="row" id="row1">
              {children.map((child) => (
                <>
                  <div key={child._id} className="taskContainer create-children col-md-5">
                    <div>
                      {child.firstName} {child.lastName} {child.age}
                    </div>
                    <hr />
                    <div className="row add-avatar">

                      <img
                        src={`../images/${child.avatar}.png`}
                        alt="DeputyFive"
                        width="150"
                        height="200"
                      />

                    </div>
                    <div className="row">
                      <div className="col-md-12 text-right del-btn">
                        <button onClick={() => deleteChild(child._id)}>
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-person-dash-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </button>
                      </div>

                    </div>

                  </div>
                </>
              ))}
            </div>

          </div>
        </div>
      </div>


    </div>

  );
}

export default NewChild;
