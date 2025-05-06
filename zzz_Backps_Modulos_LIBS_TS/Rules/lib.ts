export interface IMyRulesIS {
  text?: string
  num?: number
  bool?: boolean
  nul?: null
  und?: undefined

}

export type IMyRulesISFN = (target?: string, myRule?: IMyRulesIS, msgError?: string) => any

export async function useRule<D extends string>(ruleFN: IMyRulesISFN, target: D, myRule: IMyRulesIS, msgError: string) {
  try {
    return await ruleFN(target, myRule, msgError)
  } catch (e) {
    throw e
  }
}