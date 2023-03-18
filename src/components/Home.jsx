import React from 'react';
import './Home.css';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { GitHub, Email } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

const Home = () => {
  return (
    <div className="home-container">
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} className="header">
            <Typography variant="h2" component="h1" gutterBottom>
              Pedro Martinez
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Software Analyst and Developer specialized in SQL, Java, and C++
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Alert severity="info">
              This site is under construction, please be patient.
            </Alert>
          </Grid>
          <Grid item xs={12} className="content">
            <Typography variant="body1" paragraph>
              My interests include electronics and hardware development, as well as automotive engineering.
            </Typography>
          </Grid>
          <Grid container spacing={4} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/polo14va"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Email />}
              href="mailto:info@pedromartinezweb.com"
            >
              Email
            </Button>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
