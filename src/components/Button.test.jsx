import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

test('renders button with correct text', () => {
    render(<Button text="Click me" onClick={() => {}} />);

    const button = screen.getByRole('button', { name: 'Click me' });

    expect(button).toBeInTheDocument();
});

test('calls onClick when user clicks the button', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();

    render(<Button text="Click me" onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'Click me' });

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});