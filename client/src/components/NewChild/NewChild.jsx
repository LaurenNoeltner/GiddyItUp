import API from "../utils/ChildAPI";
import { useState, useEffect } from "react";

function NewChild() {
  const [child, setChild] = useState([]);
  const [childObject, setChildObject] = useState({});

  useEffect(() => {
    loadChild();
  }, []);

  function loadChild() {
    API.getChild()
      .then((res) => {
        console.log(res);
        setChild(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteChild(id) {
    API.deleteChild(id).then((res) =>
      loadChild().catch((err) => console.log(err))
    );
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setChildObject({ ...childObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (childObject.firstName && childObject.lastName) {
      API.saveChild({
        firstName: childObject.firstName,
        lastName: childObject.lastName,
        age: childObject.age,
      })
        .then((res) => loadChild())
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div id="boardTitle" className="col-md-3">
          Bounty Board
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="bountyContainer col-md-8">
          <div className="row" id="row1">
            {child.map((child) => (
              <>
                <div key={child.identifier} className="taskContainer col-md-3">
                  <div>
                    {child.firstName} | {child.lastName}
                  </div>
                  <hr />
                  <div>
                    {child.age}
                    <button onClick={() => deleteChild(child._id)}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-x"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <form>
        <div className="form-group">
          <label>Add Deputy</label>
          <input
            name="childName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="childInput"
            placeholder="Add deputy"
          ></input>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            name="age"
            type="text"
            className="form-control"
            id="childAge"
            placeholder="Input Child's Age"
          ></input>
        </div>
        <button
          onClick={handleFormSubmit}
          id="addChild"
          className="btn btn-primary"
        >
          Save Deputy
        </button>
      </form>
    </>
  );
}

export default NewChild;
