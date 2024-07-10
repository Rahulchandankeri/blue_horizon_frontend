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
import LayoutWrapper from './LayoutWrapper';
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
              <LayoutWrapper>{children}</LayoutWrapper>
            </Suspense>
          </ReduxProvider>
        </body>
      </CssVarsProvider>
    </html>
  );
}
