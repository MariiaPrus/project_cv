import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" component="footer" sx={{ top: 'auto', bottom: 0 }}>
      <Container>
        <Toolbar>
          <Typography variant="body2" color="inherit">
                      Контакти:
                      Електронна адреса: prusmaria09@gmail.com
                      Номер телефону +48795818445
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;