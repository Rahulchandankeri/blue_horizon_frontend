import { Grid, Typography } from '@mui/joy';
import React from 'react';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {' '}
      <Grid container spacing={4} justifyContent="space-between">
        <Grid xs={12} sm={4}>
          <Typography gutterBottom>About Us</Typography>
          <Typography>Learn more about Joy Travel and our team.</Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography gutterBottom>Services</Typography>
          <Typography>Explore our bus booking, hotel booking, and package deals.</Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography gutterBottom>Follow Us</Typography>
          <Typography>Stay connected with us on social media.</Typography>
        </Grid>
      </Grid>
      <Typography>&copy; {new Date().getFullYear()} Joy Travel. All rights reserved.</Typography>
    </footer>
  );
};

export default Footer;
