import React from 'react';
import { Logo, Button } from '@delaunay-ui/react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home example</h1>
      <p>possible home to refund app</p>

      <Button>Click me</Button>
      <Logo logo="ticket" />
    </div>
  );
};

export default Home;