
export class ControllPercentage {

  /**
   * @desc Limita o que posso ficar descontando de um valor
   */
  static async limitPercent100(percentRequered: number) {
    const limit: number = 100
    const use = limit - percentRequered

    if (use < 0 || use > limit) {
      throw new Error(`Ops.. Excedeu o limite de descontos sobre este valor.`)
    }
    return await use

  }
}