/**
 * @description ao receber os metodos retorna boleano se estao na mesma cadeia de prototipo
 * @params recebe obj1.metodo sem executar e obj2.metodo sem executar
 * @exemplo isPrototype ( meuObj1.metodo, meuObj2.metodo ).
 */

export function isPrototypeMethods(obj1: any, obj2: any): boolean {
  return obj1 == obj2;
}