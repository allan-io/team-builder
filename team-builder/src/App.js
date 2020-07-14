import React, { useState } from 'react';
import styled from "styled-components";
import TeamMember from "./TeamMember"
import TeamMemberForm from "./TeamMemberForm"
import './App.css';

const TeamMemberCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TeamMemberInfo = styled.div`
  border: 2px solid red;
  width: 50vw
`

function App() {
  const [teamMembers, setTeamMembers] = useState([
    
  ])

  const [memberToEdit, setMemberToEdit] = useState(null)
  console.log(memberToEdit)

  return (
    
    <TeamMemberCard>
      <h2>INPUT FORM</h2>
      <TeamMemberForm teamMembers={teamMembers} setTeamMembers={setTeamMembers} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit}/>
      <h2>TEAM MEMBERS</h2>
      <TeamMember teamMembers={teamMembers} setMemberToEdit={setMemberToEdit} />
    </TeamMemberCard>
  );
}

export default App;
