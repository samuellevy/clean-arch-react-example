import React from 'react';

// import { Container } from './styles';

const Nav: React.FC = () => {
  const items = [
    {
      id: 0,
      page: '/Home',
      name: 'Home',
    },
    {
      id: 1,
      page: '/contracts',
      name: 'Contracts',
    },
  ];

  return (
    <nav>
      <h1>Nav example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.page}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
