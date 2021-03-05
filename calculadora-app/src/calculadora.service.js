function CalculadoraService() {
  const SOMA = '+';

  function calcular(numero1, numero2, operacao) {
    let resultado;

    switch (operacao) {
      case SOMA:
        resultado = numero1 + numero2;
        break;

      default:
        return 'Operação inválida';
    }

    return resultado;
  }
  return [calcular];
}

export default CalculadoraService;
