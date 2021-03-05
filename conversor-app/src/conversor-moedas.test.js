import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('Deve renderizar o componente sem erro', () => {
  render(<ConversorMoedas />);
});
