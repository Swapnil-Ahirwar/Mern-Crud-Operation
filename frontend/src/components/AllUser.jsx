import React from "react";
import {Table, TableHead, TableCell, TableRow, TableBody, styled, Button} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
` 

const TRow = styled(TableRow)`
    background: #000044;
    & > th{
        color: #fff;
        font-size: 20px
    }
`

const TBody = styled(TableRow)`
    & > td{
        font-size: 18px;
    }
`

const AllUser = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getAllUsers();
    }, []);

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <TRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key = {user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit-user/${user._id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;