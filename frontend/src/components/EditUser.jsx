import React, { useEffect } from "react";
import { FormGroup, InputLabel, Input, FormControl, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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

const EditUser = () => {

    const [user, setUser] = useState(userValue);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChanges = (event) => {
        // console.log(event.target.name, event.target.value);
        setUser({...user, [event.target.name]: event.target.value});
    }

    const editUserDetails =async () => {
        await editUser(user, id);
        navigate('/all-users');
    }

    return (
        <Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(event) => onValueChanges(event)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;