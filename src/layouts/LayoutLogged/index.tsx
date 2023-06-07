import React from 'react';
import Nav from '../../components/Nav';
import { Outlet } from 'react-router-dom';

import { Container, ContentWrapper } from './styles';

const LayoutLogged: React.FC = () => {
  return (
    <Container>
      <Nav />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default LayoutLogged;
