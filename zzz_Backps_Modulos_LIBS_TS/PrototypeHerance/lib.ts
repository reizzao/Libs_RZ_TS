/**
 * @description recebe o objeto que sera copiado seu prototype
 * @params add o objeto a ser clonado.
 * @returns Returns a heranca de prototipo do objeto passado.
 */

export function herancePrototypeOfObject(target: any) {
  return Object.create(target);
}