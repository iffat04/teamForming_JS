import './Team.css'
import React from 'react';

const Team = (props) => {
    const{teamMembers} = props;
    console.log(teamMembers)
    const reducer =(prev,current)=>prev+current.balance;
    const totalPayment = teamMembers.reduce(reducer,0)
    console.log(totalPayment)

    return (
        <div className="card bg-info">
            <h1>i am a cart</h1>
            <h2>Team Members:{teamMembers.length}</h2>
            <ul>
            {
                teamMembers.map(member=><li>{member.name}</li>)
            }
            </ul>
            <h3>Total Cost For the Team :{(totalPayment).toFixed(2)}</h3>
            
        </div>
    );
};

export default Team;