'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  background-color: #f9fafb;
  height: 90vh;
  margin: auto;
  /* width: 90%; */
  /* max-width: 1600px; */
`;
interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
