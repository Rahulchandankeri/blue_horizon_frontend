import type { Metadata } from 'next';

import './globals.css';
import GlobalStyles from '../styles/GlobalStyles';
import { CssVarsProvider, Grid } from '@mui/joy';
import theme from './theme';
import NavBar from '@/components/layouts/NavBar';
import Footer from '@/components/layouts/Footer';

import ReduxProvider from '@/redux/ReduxProvider';
import { Suspense } from 'react';
import Sidebar from './admin/components/SideBar';
export const metadata: Metadata = {
  title: 'Blue Horizon',
  description: 'Blue Horizon - Bus Booking App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <CssVarsProvider theme={theme}>
        <body>
          <ReduxProvider>
            <Suspense>
              <NavBar />
              <Grid container>
                <Grid xs={2}>
                  <Sidebar />
                </Grid>
                <Grid xs={10}>{children}</Grid>
              </Grid>
              <Footer />
            </Suspense>
          </ReduxProvider>
        </body>
      </CssVarsProvider>
    </html>
  );
}
