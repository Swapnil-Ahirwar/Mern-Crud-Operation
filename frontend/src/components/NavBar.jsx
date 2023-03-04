import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink }  from "react-router-dom";

const Header = styled(AppBar)`
    background: #111444
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Code for interview </Tabs>
                <Tabs to='/all-users'>All User</Tabs>
                <Tabs to='/add-user'>Add user</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;
  