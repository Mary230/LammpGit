import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import React from "react";
import './Header.css';
import {AccountCircle, SupervisorAccountSharp} from "@material-ui/icons";
import FaceIcon from '@material-ui/icons/Face';
import {Redirect} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'

export function Header() {
    const currentUser = localStorage.getItem('token');
    return (
        <AppBar position="static">
            <Toolbar className={"header-Toolbar"}>
            <Typography variant="h6" >
                    <a href='/'   >
                        GitHub Client
                    </a>
                </Typography>
                {currentUser &&
                
                <div> 
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"><a href='/'>
                        <SearchIcon/></a>
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"><a href='/myprofile'>
                        <FaceIcon/></a>
                    </IconButton>
                
                <Button  onClick={logOut}>Log out</Button>
                
                </div> 
                }
        
            </Toolbar>
        </AppBar>
    );

    function logOut() {
        localStorage.removeItem('token');
        window.location.reload(true);
        return (
            <Redirect to="/auth"/>
        );


    }
}