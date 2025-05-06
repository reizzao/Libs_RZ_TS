
export interface ICaseRuleParam {
  text?: string
  numeric?: number
  boolean?: boolean
  nullable?: null
  optionsText?: string[]
  optionsNumeric?: number[]
}

/**
 * @description  PIPE TS ASYNC DE FUNCOES QUE RECEBEM PARAMS DO TIPO OBJETO COM REGRAS.
 * @detalhes  PASSE O TIPO DO TARGET QUE VIRA NA REQUEST < no T GENERICO DA FN > , ARGUMENTO AS FNS PODEM RECEBER OBJ DE ARGUMENTO.
 * @important  importe o tipo do obj de regras que terá de ser do tipo que suporta todos campos possiveis de entrada de dado ex: ICaseRuleParam, exemplo: export type { ICaseRuleParam as ICaseRuleParam } from "/home/rzj/x/_github_rz_/SuperLibs_TS/SuperLibsTS/pipesFN/pipeAsync_FNsParamObject_Rules/lib.ts".
* @args (1º o dado alvo, 2º o array de funcoes, 3º é o argumento das funcoes que tem que ser um objeto que atua regrando a funcao o mesmo tipo do obj é usado aqui. )
* @returns retornará o resultado do dadoAlvo submetido por todas as funcoes do array recebido.
* @exemplo await sut<TypeDotargetRequest> (requestMock, listFN, paramRule)
 */

export async function pipeParamRules<T>(target: T, listFN: any[], param?: ICaseRuleParam) {
  try {
    return await listFN.reduce((acc, fn) => {
      return fn(acc, param)
    }, target)
  } catch (e) {
    throw e
  }
}
