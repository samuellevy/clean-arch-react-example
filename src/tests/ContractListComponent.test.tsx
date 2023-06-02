import { render } from '@testing-library/react';
import ContractList from '../components/ContractList';
import { Contract } from '~/domain/entity/Contract';

describe('<App />', () => {
  const contracts: Contract[] = [
    {
      id: 1,
      name: 'Contract 1',
      description: 'Contract 1 description',
      value: 100,
    },
  ];

  it('should display app component with no errors', () => {
    const wrapper = render(<ContractList contracts={contracts} />);
    expect(wrapper).toBeTruthy();
  });

  it('should display two items in navbar', () => {
    const wrapper = render(<ContractList contracts={contracts} />);
    expect(wrapper.container.getElementsByTagName('li').length).toBe(1);
  });
});
