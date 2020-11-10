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

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="20" {...props} />
        
         
         <img className="card-img" src={user.image} alt="user thumbnail" />
          {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}  
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

{/* <div className="card-body">{props.children}</div>
        </div> */}

export default BountyBoard;