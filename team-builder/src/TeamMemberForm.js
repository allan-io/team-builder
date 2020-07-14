import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Form = styled.form`
    width: 50vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    border-color: black;
    width: 50%;
    height: 30px;
    margin: 5px;
`

const Button = styled.button`
    color: black;
    background-color: white;
    width: 100px;
    height: 40px;
    font-size: 18px;
    border-radius: 5px;
`

const TeamMemberForm = ({ teamMembers, setTeamMembers, memberToEdit, setMemberToEdit }) => {
    const defaultState = {name: '', email: '', role: ''}
    const [newTeamMember, setNewTeamMember] = useState(defaultState)

    useEffect(() => {
        if (memberToEdit) { 
            setNewTeamMember(memberToEdit)
        }
    }, [memberToEdit])

    const handleChange = (event) =>{
        setNewTeamMember({
            ...newTeamMember,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newTeamMember && !memberToEdit) {
            setTeamMembers([...teamMembers, newTeamMember])
            setNewTeamMember(defaultState)
        } else {
           teamMembers.forEach((el, i) => {
               const email = memberToEdit.email
               if (el.email === email) {
                   setTeamMembers([...teamMembers.slice(0,i), newTeamMember, ...teamMembers.slice(i+1)])
                   setNewTeamMember(defaultState)
                   setMemberToEdit(null)
               }
           })
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleChange}
            placeholder='name'
            type='text'
            name='name'
            value={newTeamMember.name}
            />
            <Input onChange={handleChange}
            placeholder='email'
            type='email'
            name='email'
            value={newTeamMember.email}
            />
            <Input onChange={handleChange}
            placeholder='role'
            type='text'
            name='role'
            value={newTeamMember.role}
            />
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default TeamMemberForm