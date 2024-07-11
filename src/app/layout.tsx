import type { Metadata } from 'next';
import './globals.css';
import GlobalStyles from '../styles/GlobalStyles';
import { CssVarsProvider } from '@mui/joy';
import theme from './theme';

import ReduxProvider from '@/redux/ReduxProvider';
import { Suspense } from 'react';

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
