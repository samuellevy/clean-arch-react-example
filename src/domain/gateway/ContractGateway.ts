import { Contract } from '../entity/Contract';

export default interface ContractGateway {
  save(contract: Contract): Promise<void>;
  findAll(): Promise<Contract[]>;
}
