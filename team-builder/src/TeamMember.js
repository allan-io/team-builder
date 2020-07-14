import React from "react";
import "../src/index.css"
import styled from "styled-components";
import { GrEdit } from "react-icons/gr"

const TeamMemberInfo = styled.div`
  border: 2px solid black;
  width: 50vw;
  margin: 10px 0;
`
const TeamMember = ( { teamMembers, setMemberToEdit }) => {

    return (
        <>
            {teamMembers.map((member, i) => (
                <TeamMemberInfo key={i} >
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <GrEdit size="1.5em" className="edit-icon" onClick={() => {
                        setMemberToEdit(member)
                    }} />
                </TeamMemberInfo>
            ))}
        </>
    )
}

export default TeamMember