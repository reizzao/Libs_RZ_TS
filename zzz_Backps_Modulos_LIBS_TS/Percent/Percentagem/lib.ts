
export class Percentagem {

  /**
   * @desc desconta do alvo o valor em percentual e retorna o valor que foi DESCONTADO
   * @input (alvo, percentual desejado)
   * @example discount ( 100, 10 ) // Quero descontar 10% de 100 -> vai me retornar o valor que descontei.'
   */
  static async discount(data: number, percent: number) {
    const discount = await (data / 100) * percent
    return await discount
  }

}
