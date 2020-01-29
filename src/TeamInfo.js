import React from "react";

function TeamInfo(props) {
  console.log(props);
  return (
    <div>
      {props.teamMembers.map((member) => (
        <div className="info" key={member.id}>
          <h2>{member.name}</h2>
          <h3> Email: {member.email} </h3>
          <p> Role: {member.role} </p>
        </div>
      ))}
    </div>
  );
}
export default TeamInfo;
