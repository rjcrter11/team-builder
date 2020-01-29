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
      <h1>Team List</h1>
      <TeamForm addTeamMember={addTeamMember} />
      <TeamInfo teamMembers={teamMembers} />
    </div>
  );
}

export default App;
