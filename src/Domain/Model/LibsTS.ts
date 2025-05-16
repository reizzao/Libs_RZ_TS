

interface ILibsTS {
  Props: PropsLibTS
}

interface PropsLibTS {
  Console: void
}


class LibsTSModel {
  // todo: defniir props deste objeto que serao os metodos de uso
  // public readonly ID: string

  constructor(public readonly props: PropsLibTS) { }



}

export { LibsTSModel }
export type { ILibsTS, PropsLibTS }