
/**
 * @desc Classe Personalizada para criar novos erros
 * @input recebe uma string para retorno do feedback de erro'
 */
export class PersonalClassError extends Error {
  constructor(msg: string) {
    super(`${msg}`);
    this.name = `PersonalClassError`;
  }
}