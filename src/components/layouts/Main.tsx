'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  margin-top: 32px;
`;
interface LayoutProps {
  children: ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
