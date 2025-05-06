import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { isPrototypeMethods } from "./lib.ts";

const sut = isPrototypeMethods

class ClasseMock1 {
  constructor(public c1: string, public c2: string) { }
  metodo1() {
    return `Ola metodo 1 : minhas props c1= ${this.c1} e c2 = ${this.c2}`;
  }
}

const objeto1 = new ClasseMock1("vcum", "vcdois");
const objeto2 = new ClasseMock1("222", "20000");


Deno.test({
  name: "[ OK ] deve retornar o acesso a metodo do outro objeto.",
  only: false,
  async fn() {
    const result = sut(objeto1.metodo1, objeto2.metodo1)

    expect(result).toBeTruthy()
  },

});

export default 1;