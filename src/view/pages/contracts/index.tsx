import React, { useEffect, useState } from 'react';

import ContractList from '../../../components/ContractList';
import { Container, CardContainer, Card } from './styles';
import { Button } from '@delaunay-ui/react';
import { Contract } from '~/domain/entity/Contract';
import { GetContractsUseCase } from '~/application/GetContractsUseCase';
import ContractsHttpGateway from '~/infra/gateway/ContractsHttpGateway';

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState([] as Contract[]);

  const getData = async () => {
    const contractHttpGateway = new ContractsHttpGateway();
    const getContractsUseCase = new GetContractsUseCase(contractHttpGateway);
    const contracts = await getContractsUseCase.execute();
    setContracts(contracts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>Contracts example</h1>
      <p>possible contracts to refund app</p>

      <CardContainer>
        <Card>
          <label>Total contracts</label>
          <span>{contracts.length}</span>
        </Card>
        <Card bg="#e54d2e" color="#fff">
          <label>Total contracts</label>
          <span>{contracts.length}</span>
        </Card>
      </CardContainer>
      <section>
        <ContractList contracts={contracts} />
      </section>

      <Button>Create contract</Button>
    </Container>
  );
};

export default Contracts;
