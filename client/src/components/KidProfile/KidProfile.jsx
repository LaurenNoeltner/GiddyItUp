import React, { useState, useEffect } from 'react';
import DeputyTwo from "../../images/DeputyBoy.png";
import MoneyBag from "../../images/newMoneyBag.png";
import "./KidProfile.css";
// import API from "../utils/API";
import ChildAPI from '../utils/ChildAPI';


function KidProfile() {

    const [children, setChild] = useState([]);

    useEffect(() => {
        loadChild();
    }, []);

    function loadChild() {
        ChildAPI.getChild()
        .then((res) => {
            console.log (res);
            setChild(res.data);
        })
        .catch((err) => console.log(err));
    };

    return (
        <>
        <div className="row">
        {children.map(child => ( 
                
        <>    
            <div key={child._id} className="col-md-4"></div>
            <div id="kidProfile" className="col-md-4">Deputy on Duty
            <img
              src={DeputyTwo}
              alt="DeputyTwo"
              width="150"
              height="200"
            />
            <hr></hr>
            <ul id="kidDetails">
                <li><strong>First Name: {child.firstName}</strong></li>
                <li><strong>Last Name: {child.lastName}</strong></li>
                <li><strong>Age: {child.age}</strong></li>
                <img
                src={MoneyBag}
                alt="MoneyBag"
                width="150"
                height="150"
                />
            </ul>
            </div>
            </>
        ))}
       

    
         </div>
         </>
    )



}
export default KidProfile;