import React from 'react';
import Nav from '../../components/Nav';
import { Outlet } from 'react-router-dom';

// import { Container } from './styles';

const LayoutLogged: React.FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default LayoutLogged;
