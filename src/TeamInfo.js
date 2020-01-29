import React from "react";

function TeamInfo({ id, memberToEdit, teamMembers }) {
  // console.log(props);
  return (
    <div className="team-info">
      {teamMembers.map((member) => (
        <div className="info" key={member.id}>
          <h2>{member.name}</h2>
          <h3> Email: {member.email} </h3>
          <p> Role: {member.role} </p>

          <button className="delbtn" onClick={(e) => memberToEdit(id)}>
            Edit Members
          </button>
        </div>
      ))}
    </div>
  );
}
export default TeamInfo;
