import React from 'react';

import { Container } from './styles';
import { Contract } from '~/domain/entity/Contract';

type ContractListProps = {
  contracts: Contract[];
};

const ContractList: React.FC<ContractListProps> = ({ contracts }) => {
  return (
    <Container>
      <h1>Contract List</h1>

      <table>
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>Contract Description</th>
            <th>Contract Value</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.name}</td>
              <td>{contract.description}</td>
              <td>{contract.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ContractList;
