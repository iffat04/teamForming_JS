import './Employee.css'
import React from 'react';

const Employee = (props) => {
    //console.log(props.employee)
    const {name,picture,role,age,balance,phone,gender} =props.employee;
    //console.log(props)
   
    return (
        <div className="col">
            <div className="card h-100 ">
            <img src={picture} className="card-img-top picture mx-auto" alt=""></img>
            <div className="card-body">
                <h3 className="card-title">{role}</h3>
                <h5>Name: {name}</h5>
                <p>{gender}</p>
                <p className="card-text">Age:{age}</p>
                <p className="card-text">Phone:{phone}</p>
                <h4>Payment:{balance}</h4>
                <button id="addBtn" isDisabled="false" onClick={()=>props.handleAdd(props.employee)}>Add to the Team</button>
            </div>
            </div>
  
        </div>
    );
};

export default Employee;