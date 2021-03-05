import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraService', () => {
  const [calcular, SOMA, SUBTRACAO] = CalculadoraService();

  it('Deve garantir que 1 + 4 = 5', () => {
    const soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it('Deve garantir que 1 - 4 = -3', () => {
    const subtracao = calcular(1, 4, SUBTRACAO);
    expect(subtracao).toEqual(-3);
  });

  it('Deve garantir que 1 / 4 = 0.25', () => {
    const divisao = calcular(1, 4, '/');
    expect(divisao).toEqual(0.25);
  });
});
