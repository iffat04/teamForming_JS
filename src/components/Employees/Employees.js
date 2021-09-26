import React, { useEffect, useState } from 'react';
import './Employees.css'
//import logo from '../resources/logo.jpg'
import Employee from '../Employee/Employee';
import Team from '../Team/Team';


const Employees = () => {
    //fetch data
   const[employees,setEmployees]=useState([]);
   useEffect(()=>{
       fetch('./fakedata.json')
       .then(res=>res.json())
       .then(data=>setEmployees(data))
   },[])

   //take selected teammember object in a array
   const[teamMembers,setTeamMembers] =useState([]);


    //button click handle and data add
   const handleAdd= (employee)=>{
       if(!employee.added){
        employee.added= true;
        const newTeamMembers=[...teamMembers,employee] 
        setTeamMembers(newTeamMembers);
       }
   
   }
   console.log(teamMembers)

    
    return (
        <div className="all-container row pt-5">
            
            
            <div className="col col-1">
           
            </div>
            
            <div className="col col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                    employees.map(employee=><Employee key={employee.id} employee={employee} handleAdd={handleAdd} />)
                    
                    }
                </div>
            </div>
            <div className="col col-2">
                <Team teamMembers={teamMembers}></Team>
            </div>
            
            
            
        </div>
    );
};



export default Employees;
