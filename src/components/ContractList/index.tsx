import React from 'react';

import { Container } from './styles';
import { Contract } from '~/domain/entity/Contract';

import { Table } from '@delaunay-ui/react';

type ContractListProps = {
  contracts: Contract[];
};

const ContractList: React.FC<ContractListProps> = ({ contracts }) => {
  return (
    <Container>
      <h1>Contract List</h1>

      <Table maxWidth="700">
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
      </Table>
    </Container>
  );
};

export default ContractList;
