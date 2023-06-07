import { render } from '@testing-library/react';
import Login from '../presentation/pages/Login';

describe('<App />', () => {
  it('should display Login component with no errors', () => {
    const wrapper = render(<Login />);
    expect(wrapper).toBeTruthy();
  });

  it('should display two inputs component and one button', () => {
    const wrapper = render(<Login />);
    expect(wrapper.container.getElementsByTagName('input').length).toBe(2);
    expect(wrapper.container.getElementsByTagName('button').length).toBe(1);
  });

  // it('should display two items in navbar', () => {
  //   const wrapper = render(<Login />);
  //   expect(wrapper.container.getElementsByTagName('li').length).toBe(2);
  // });

  // it('should display home if path is empty', () => {
  //   const wrapper = render(<Login />);
  //   expect(wrapper.container.getElementsByTagName('h1')[1].innerHTML).toBe(
  //     'Home example'
  //   );
  // });
});
