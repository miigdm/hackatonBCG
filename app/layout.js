"use client";
import { Inter } from 'next/font/google'
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import apm from '../rum'
import { ApolloWrapper } from "@/lib/apollo-wrapper";

import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState , useEffect} from 'react';

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      localStorage.clear()
      window.location.href = "/"

  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('fullname') )
    setUser(user)
  })



  return (
    <html lang="en">
      <body >
      <ApolloWrapper>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    ECO FOOD LINK
                </Typography>

                <Typography variant="subtitle1" style={{ marginRight: 10 }}>
                    {user}
                </Typography>

                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>

        {children}
        </ApolloWrapper>
      </body>

    </html>
  )
}
