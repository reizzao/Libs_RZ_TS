
/**
 * @desc PropertyDecorator Tamanho Minimo para textos
 * @input passe o numero para tamnho minimo de texto
 * @return caso tudo ok .. retorna o dado passado , caso contrario retorna um novo Erro JS com feedback
 */

import { MinTextError } from "./error.custom.ts";


export function minLength(length: number) {

  return (target: any, key: string) => {

    let _value = target[key]

    const getter = () => _value

    const setter = (value: string) => {

      if (value.length <= length) {
        throw new MinTextError(`Ops... o minimo de letras é ${length}`)
      }
      _value = value
    }

    // tem que definir no objeto qual é o get e qual é o set

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true
    })

  }

}

