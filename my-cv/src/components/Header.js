import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Головна</Button>
          <Button color="inherit" component={Link} to="/todo">TODO</Button>
          <Button color="inherit" component={Link} to="/api">API Search</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;