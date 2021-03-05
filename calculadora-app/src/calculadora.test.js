import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';

describe('Calculadora', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<Calculadora />);
    const linkElement = screen.getByText(/Calculadora em ReactJS/i);
    expect(linkElement).toBeInTheDocument();
  });
});
