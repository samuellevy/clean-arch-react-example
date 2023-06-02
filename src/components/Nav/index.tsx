import React from 'react';

import { Container, NavList } from './styles';

const Nav: React.FC = () => {
  const items = [
    {
      id: 0,
      page: '/',
      name: 'Home',
    },
    {
      id: 1,
      page: '/contracts',
      name: 'Contracts',
    },
  ];

  return (
    <Container data-testid="nav">
      <h1>Nav example</h1>
      <NavList>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.page}>{item.name}</a>
          </li>
        ))}
      </NavList>
    </Container>
  );
};

export default Nav;
