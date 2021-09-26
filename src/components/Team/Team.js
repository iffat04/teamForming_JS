import './Team.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const{teamMembers} = props;
    console.log(teamMembers)
    //calculate total
    const reducer =(prev,current)=>prev+current.balance;
    const totalPayment = teamMembers.reduce(reducer,0)
    console.log(totalPayment)

    //adding icon
    const memberIcon = <FontAwesomeIcon icon={faUser} size="lg" />

    return (
        <div className="card team">
            <h5>{memberIcon} : {teamMembers.length}</h5>
            <ul>
            {
                teamMembers.map(member=><li className="member-name" key={member.name}>{member.name}</li>)
            }
            </ul>
            <p>Total Cost: <span id= "totalCost">{(totalPayment).toFixed(2)} </span> </p>
            
        </div>
    );
};

export default Team;