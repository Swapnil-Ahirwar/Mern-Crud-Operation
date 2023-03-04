import React from "react";
import { FormGroup, InputLabel, Input, FormControl, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    margin-top: 30px;
    & > div{
        margin-top: 20px;
    }
`

const userValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user, setUser] = useState(userValue);

    const navigate = useNavigate();

    const onValueChanges = (event) => {
        // console.log(event.target.name, event.target.value);
        setUser({...user, [event.target.name]: event.target.value});
    }

    const addUserDetails =async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={addUserDetails}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;