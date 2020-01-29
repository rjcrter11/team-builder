import React, { useState } from "react";
import TeamInfo from "./TeamInfo";
import TeamForm from "./TeamForm";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Bob",
      email: "bob@email.com",
      role: "Front end engineer"
    },
    {
      id: 2,
      name: "Samantha",
      email: "SamJ@email.com",
      role: "data scientist"
    }
  ]);

  const memberToEdit = (id) => {
    const edit = [...teamMembers];
    edit.splice(id);
    setTeamMembers(edit);
  };

  const addTeamMember = (member) => {
    const newTeamMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div className="App">
      <div className="info-box">
        <h1>Team List</h1>
        <TeamInfo teamMembers={teamMembers} memberToEdit={memberToEdit} />
      </div>
      <TeamForm memberToEdit={memberToEdit} addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
