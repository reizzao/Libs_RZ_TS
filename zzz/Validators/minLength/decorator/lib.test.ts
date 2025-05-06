import { assertThrows } from "https://deno.land/std@0.219.0/assert/mod.ts";
import { minLength } from "./lib.ts";

const sut = minLength
const setMinText: number = 3

class ClassMock {
  @sut(setMinText)
  declare titulo: string

  constructor(t: string) {
    this.titulo = t
  }
}

Deno.test({
  name: "[ FAIL ] deve retornar a mensagem de erro ao passar menos que o minimo de letras.",
  only: false,
  async fn() {
    function target(d: string) {
      try {
        const res = new ClassMock(d)
        return res
      } catch (e) {
        throw e
      }
    }

    assertThrows(
      () => { target("xx") }, Error, `Ops... o minimo de letras é ${setMinText}`,
    )

  },

});

export default 1;