/* eslint-disable react/no-unescaped-entities */
import { Grid, List, ListItem, ListItemButton, Typography } from '@mui/joy';
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
const Footer = () => {
  const footerLinks = [
    { id: 1, text: 'About us', url: '/about' },
    { id: 2, text: 'Investor Relations', url: '/investors' },
    { id: 7, text: 'Offers', url: '/offers' },
    { id: 8, text: 'Careers', url: '/careers' },
    { id: 6, text: 'Sitemap', url: '/sitemap' },
  ];
  const followUsLinks = [
    { id: 1, platform: 'Facebook', url: 'https://www.facebook.com/yourpage' },
    { id: 2, platform: 'Twitter', url: 'https://twitter.com/yourhandle' },
    { id: 3, platform: 'Instagram', url: 'https://www.instagram.com/youraccount' },
    { id: 4, platform: 'LinkedIn', url: 'https://www.linkedin.com/company/yourcompany' },
    { id: 5, platform: 'YouTube', url: 'https://www.youtube.com/yourchannel' },
  ];
  const socialIcons: any = {
    Facebook: <Facebook />,
    Twitter: <Twitter />,
    Instagram: <Instagram />,
    LinkedIn: <LinkedIn />,
    YouTube: <YouTube />,
  };
  return (
    <footer className={styles.footer}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid xs={12} sm={4}>
          <Typography level="body-md" marginBottom={1} fontWeight={600}>
            Blue Horizon
          </Typography>
          <Typography level="body-xs">
            Welcome to Blue Horizon, your trusted companion for effortless bus travel. Discover a seamless booking experience with
            our intuitive app. From daily commutes to adventurous journeys, we ensure convenience, reliability, and exceptional
            service. Explore real-time schedules, secure reservations, and personalized options tailored to your travel needs.
            Start your journey with Blue Horizon today!
          </Typography>
        </Grid>
        <Grid xs={12} sm={2}>
          <Typography gutterBottom level="body-md" fontWeight={600} marginLeft={1.1}>
            About Us
          </Typography>
          <List size="sm" component="nav">
            {footerLinks?.map((links) => (
              <Link href={links?.url} key={links.id} color="grey">
                <Typography level="body-xs">
                  <ListItem>{links?.text}</ListItem>
                </Typography>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid xs={12} sm={3}>
          {' '}
          <Typography gutterBottom level="body-md" fontWeight={600}>
            Contact Information
          </Typography>
          <Typography marginBottom={1.2} level="body-xs">
            Address: 123 Blue Horizon Way, Cityville, Country
          </Typography>
          <Typography marginBottom={1.2} level="body-xs">
            Email: info@bluehorizon.com
          </Typography>
          <Typography marginBottom={1.2} level="body-xs">
            Phone: +123-456-7890
          </Typography>
        </Grid>
        <Grid xs={12} sm={3}>
          <Typography gutterBottom level="body-md" fontWeight={600} marginLeft={4}>
            Follow Us
          </Typography>
          <List orientation="horizontal" component="nav">
            {followUsLinks.map((link) => (
              <ListItem key={link.id}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <ListItemButton>{socialIcons[link.platform]}</ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Typography level="body-xs">&copy; {new Date().getFullYear()} Blue Horizon </Typography>
    </footer>
  );
};

export default Footer;
