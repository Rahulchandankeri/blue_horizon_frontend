'use client';
import React, { ReactNode } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
interface MyComponentProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<MyComponentProps> = ({ children }) => {
  return <Provider store={store}>{children}/</Provider>;
};

export default ReduxProvider;
