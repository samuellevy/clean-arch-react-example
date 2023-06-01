import { test, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
    const wrapper = render(<App />);
    const { container } = wrapper;

    const h1 = container.querySelector('h1');
    expect(h1?.textContent).toBe('Refund POC');

    const total = container.querySelector('.total');
    expect(total?.textContent).toBe('Total: $0.00');
});