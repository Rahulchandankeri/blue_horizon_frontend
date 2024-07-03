import { Grid, Typography } from '@mui/joy';
import React from 'react';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {' '}
      <Grid container spacing={4} justifyContent="space-between">
        <Grid xs={12} sm={4}>
          <Typography gutterBottom level="body-sm">
            About Us
          </Typography>
          <Typography level="body-xs">The One Stop To Book Bus</Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography gutterBottom level="body-sm">
            Services
          </Typography>
          <Typography level="body-xs">Explore our bus booking, hotel booking, and package deals.</Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography gutterBottom level="body-sm">
            Follow Us
          </Typography>
          <Typography level="body-xs">Stay connected with us on social media.</Typography>
        </Grid>
      </Grid>
      <Typography level="body-xs">&copy; {new Date().getFullYear()} Blue Horizon </Typography>
    </footer>
  );
};

export default Footer;
