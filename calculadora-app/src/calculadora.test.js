import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculadora from './calculadora';

describe('Calculadora', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<Calculadora />);
  });

  test('Deve limpar o campo de números', () => {});
});
