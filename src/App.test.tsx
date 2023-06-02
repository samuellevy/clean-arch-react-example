import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should display app component with no errors', () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });

  it('should display nav component', () => {
    const wrapper = render(<App />);
    expect(wrapper.getByTestId('nav')).toBeTruthy();
  });

  it('should display two items in navbar', () => {
    const wrapper = render(<App />);
    expect(wrapper.container.getElementsByTagName('li').length).toBe(2);
  });

  it('should display home if path is empty', () => {
    const wrapper = render(<App />);
    expect(wrapper.container.getElementsByTagName('h1')[1].innerHTML).toBe(
      'Home example'
    );
  });
});
