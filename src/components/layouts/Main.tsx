'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  background-color: #f9fafb;
  margin: auto;
  width: 90%;
  max-width: 1600px;
  margin-top: 32px;
`;
interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
