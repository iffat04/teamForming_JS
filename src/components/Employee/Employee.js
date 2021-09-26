import './Employee.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faPlusSquare, faPhone} from '@fortawesome/free-solid-svg-icons'




const Employee = (props) => {

    const teamicon = <FontAwesomeIcon icon={faPlusSquare} size="lg" />
    const phoneicon= <FontAwesomeIcon icon={faPhone}/>
    //console.log(props.employee)
    const {name,picture,role,age,balance,phone,gender} =props.employee;
    //console.log(props)
   
    return (
        <div className="col">
            <div className="card p-3 employee-container">
            <img src={picture} className="card-img-top picture mx-auto" alt=""></img>
            <div className="card-body">
                <h3 className="card-title">{role}</h3>
                <h5>Name: <span id="name"> {name} </span> </h5>
                
                <div className="employee-details">
                <p>{gender}
                <br />
                Age:{age}
                </p>
                
                <p className="card-text">{phoneicon}{phone}</p>
                <h5>Payment: $<span>{balance}</span> </h5>
                <button id="addBtn" className="fs-6" onClick={()=>props.handleAdd(props.employee)}>{teamicon}  Add to the Team</button>
                </div>
            </div>
            </div>
  
        </div>
    );
};

export default Employee;