import React from 'react';
import "./style.css";

export function Header(props) {
    return (
        <div className="form-group">
            <div className="form-control">
                <h2>{props.heading}</h2>
            </div>
        </div>          
    );
}

export function List({ children }) {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
      <button {...props} className="edit-btn">
            {props.children}
      </button>
      </div>
    );
}

export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
}

export function AddBtn(props) {
    return (
        <button {...props} className="add-btn">
            {props.children}
        </button>
    );
}

export default ParentBounty;