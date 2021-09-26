import React, { useEffect, useState } from 'react';
import './Employees.css'
import logo from '../resources/logo.jpg'
import Employee from '../Employee/Employee';
import Team from '../Team/Team';


const Employees = () => {
   const[employees,setEmployees]=useState([]);
   useEffect(()=>{
       fetch('./fakedata.json')
       .then(res=>res.json())
       .then(data=>setEmployees(data))
   },[])

   const[teamMembers,setTeamMembers] =useState([]);



   const handleAdd= (employee)=>{
       if(!employee.added){
        employee.added= true;
        const newTeamMembers=[...teamMembers,employee] 
        setTeamMembers(newTeamMembers);
       }
   
   }
   console.log(teamMembers)

    
    return (
        <div>
            <h1>employees:{employees.length}</h1>
            <img className='body-img' src={logo} alt="" />
            <div>
                <Team teamMembers={teamMembers}></Team>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                employees.map(employee=><Employee key={employee.id} employee={employee} handleAdd={handleAdd} />)
                
                }
            </div>
            
            
        </div>
    );
};



export default Employees;
