import React from "react";
import {Table, TableHead, TableCell, TableRow, TableBody, styled, Button} from "@mui/material";
import { getUsers } from "../service/api";
import { useEffect, useState } from "react";


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

    return (
        <StyledTable>
            <TableHead>
                <TRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key = {user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}}>Edit</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;