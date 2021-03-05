import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';

test('renders Calculadora em ReactJS link', () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/Calculadora em ReactJS/i);
  expect(linkElement).toBeInTheDocument();
});
