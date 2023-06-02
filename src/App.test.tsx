import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('should display elements', () => {
        const wrapper = render(<App />);
        expect(wrapper).toBeTruthy();
    });
});