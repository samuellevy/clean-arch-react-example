import React from 'react';

// import { Container } from './styles';

const CreateContract: React.FC = () => {
  return (
    <div>
      <h1>Create Contract</h1>
      <form>
        <input type="text" placeholder="Contract Name" />
        <input type="text" placeholder="Contract Description" />
        <input type="text" placeholder="Contract Value" />
      </form>
    </div>
  );
};

export default CreateContract;
