import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, CssBaseline, IconButton, AppBar, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import './MenuLateral.css';

const MenuLateral = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className="menuLateral-root">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            className="menuLateral-menuButton"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            TGE - Módulo de administração fiscal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className="menuLateral-drawer"
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        classes={{
          paper: 'menuLateral-drawerPaper',
        }}
      >
        <Toolbar className="menuLateral-toolbar" />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Processos', 'Documentações'].map((text, index) => (
              <ListItem
                button
                key={text}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                className={selectedIndex === index ? 'selected' : ''}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MenuLateral;