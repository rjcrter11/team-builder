import React, { useState, useEffect } from "react";

function TeamForm(props) {
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value });
  };

  const submitMember = (e) => {
    e.preventDefault();
    props.addTeamMember(memberInfo);
    setMemberInfo({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitMember}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Add name..."
        onChange={handleChange}
        value={memberInfo.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter email..."
        onChange={handleChange}
        value={memberInfo.email}
      />

      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        name="role"
        type="text"
        placeholder="Add role..."
        onChange={handleChange}
        value={memberInfo.role}
      />

      <button type="submit">Add Player</button>
    </form>
  );
}
export default TeamForm;
