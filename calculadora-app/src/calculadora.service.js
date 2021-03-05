function CalculadoraService() {
  const SOMA = '+';
  const SUBTRACAO = '-';
  const DIVISAO = '/';

  function calcular(numero1, numero2, operacao) {
    let resultado;

    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;

      case SUBTRACAO:
        resultado = numero1 - numero2;
        break;

      case DIVISAO:
        resultado = numero1 / numero2;
        break;

      default:
        return 'Operação inválida';
    }

    return resultado;
  }
  return [calcular, SOMA, SUBTRACAO, DIVISAO];
}

export default CalculadoraService;
