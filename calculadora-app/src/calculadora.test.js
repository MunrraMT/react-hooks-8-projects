import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculadora from './calculadora';

describe('Calculadora', () => {
  test('Deve renderizar o componente sem erros', () => {
    render(<Calculadora />);
  });

  test('Deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
    expect(getByTestId('txtNumeros')).not.toHaveValue('1');
  });

  test('Deve calcular 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
    expect(getByTestId('txtNumeros')).not.toHaveValue('4');
  });

  test('Deve calcular 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
    expect(getByTestId('txtNumeros')).not.toHaveValue(5.5);
    expect(getByTestId('txtNumeros')).not.toHaveValue('5,5');
  });

  test('Deve calcular 2 - 3 e obter -1', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('-1');
    expect(getByTestId('txtNumeros')).not.toHaveValue(-1);
  });

  test('Deve calcular 3 / 10 e obter 0,3', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('0.3');
    expect(getByTestId('txtNumeros')).not.toHaveValue('0,3');
    expect(getByTestId('txtNumeros')).not.toHaveValue(0.3);
  });

  test('Deve calcular 5 * 5 e obter 25', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('25');
    expect(getByTestId('txtNumeros')).not.toHaveValue(25);
  });
});
