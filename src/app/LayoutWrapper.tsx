'use client';
import { Grid } from '@mui/joy';
import React from 'react';
import Sidebar from './admin/components/SideBar';
import Footer from '@/components/layouts/Footer';
import NavBar from '@/components/layouts/NavBar';
import { useRouter } from 'next/navigation';
const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  let userDetails: any = '{}';
  if (typeof window !== 'undefined') {
    userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  }
  if (userDetails.role === 'admin') {
    router.push(`/admin/routes/create`);
  }

  return (
    <>
      {userDetails?.role !== 'admin' ? <NavBar /> : null}
      <Grid container>
        {userDetails?.role === 'admin' ? (
          <>
            <Grid xs={2}>
              <Sidebar />
            </Grid>
            <Grid xs={10}>{children}</Grid>
          </>
        ) : (
          <Grid xs={12}>{children}</Grid>
        )}
      </Grid>
      {userDetails?.role !== 'admin' ? <Footer /> : null}
    </>
  );
};

export default LayoutWrapper;
