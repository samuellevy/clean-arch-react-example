import { Contract } from '~/domain/entity/Contract';
import ContractGateway from '~/domain/gateway/ContractGateway';

export class GetContractsUseCase {
  constructor(private contractGateway: ContractGateway) {}

  execute(): Promise<Contract[]> {
    return this.contractGateway.findAll();
  }
}
